import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { modernColors, shadows, breakpoints } from '../theme/colors';

// Tipos para os dados da API
interface NewsItem {
  title: string;
  pubDate: string;
  link: string;
  author: string;
  thumbnail: string;
  description: string;
}

interface ApiResponse {
  status: string;
  feed: object;
  items: NewsItem[];
}

const NewsContainer = styled.aside`
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  box-shadow: ${shadows.md};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow-y: auto;

  body.dark-mode & {
    background-color: rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.08);
  }

  @media (max-width: ${breakpoints.lg}) {
    display: none; /* Oculta em telas menores */
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${modernColors.primary[400]};
  margin-bottom: 1.5rem;
  text-align: center;

  body.dark-mode & {
    color: ${modernColors.primary[300]};
  }
`;

const NewsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const NewsItemCard = styled.li`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: background-color 0.3s ease;
  overflow: hidden;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  body.dark-mode & {
    background-color: rgba(0, 0, 0, 0.2);
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`;

const NewsLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const NewsTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem 1rem;
  margin: 0;
  color: ${modernColors.neutral[800]};
  body.dark-mode & {
    color: ${modernColors.neutral[100]};
  }
`;

const NewsDate = styled.p`
  font-size: 0.75rem;
  padding: 0 1rem 0.75rem;
  margin: 0;
  color: ${modernColors.neutral[400]};
`;

const skeletonAnimation = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const SkeletonLoader = styled.div`
  height: 80px;
  width: 100%;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.05);
  background-image: linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.15) 40px, rgba(255,255,255,0.05) 80px);
  background-size: 200px 100%;
  animation: ${skeletonAnimation} 1.5s infinite linear;

  body.dark-mode & {
    background-color: rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(90deg, rgba(0,0,0,0.2) 0px, rgba(0,0,0,0.3) 40px, rgba(0,0,0,0.2) 80px);
  }
`;

const ErrorMessage = styled.p`
  color: ${modernColors.error[400]};
  text-align: center;
`;

const FinancialNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fbraziljournal.com%2Ffeed%2F');
        if (!response.ok) {
          throw new Error('Falha ao buscar notícias.');
        }
        const data: ApiResponse = await response.json();
        if (data.status !== 'ok') {
          throw new Error('A API de notícias retornou um erro.');
        }
        setNews(data.items.slice(0, 10)); // Limita a 10 notícias
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ocorreu um erro desconhecido.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
    // Atualiza a cada 30 minutos
    const intervalId = setInterval(fetchNews, 1800000); 

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const renderContent = () => {
    if (loading && news.length === 0) {
      return (
        <NewsList>
          {[...Array(5)].map((_, index) => <SkeletonLoader key={index} />)}
        </NewsList>
      );
    }

    if (error) {
      return <ErrorMessage>{error}</ErrorMessage>;
    }

    return (
      <NewsList>
        {news.map((item) => (
          <NewsItemCard key={item.link}>
            <NewsLink href={item.link} target="_blank" rel="noopener noreferrer">
              <NewsTitle>{item.title}</NewsTitle>
              <NewsDate>{formatDate(item.pubDate)}</NewsDate>
            </NewsLink>
          </NewsItemCard>
        ))}
      </NewsList>
    );
  };

  return (
    <NewsContainer>
      <Title>Últimas Notícias</Title>
      {renderContent()}
    </NewsContainer>
  );
};

export default FinancialNews;
