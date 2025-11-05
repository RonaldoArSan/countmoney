import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { modernColors, shadows, breakpoints } from '../theme/colors';

// Tipos para os dados da API
interface CurrencyData {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
}

type ApiResponse = Record<string, CurrencyData>;

const RatesContainer = styled.aside`
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

const CurrencyList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CurrencyItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: background-color 0.3s ease;

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

const CurrencyName = styled.span`
  font-weight: 500;
  color: ${modernColors.neutral[700]};
  body.dark-mode & {
    color: ${modernColors.neutral[200]};
  }
`;

const CurrencyValue = styled.span`
  font-weight: 600;
  color: ${modernColors.neutral[900]};
  body.dark-mode & {
    color: ${modernColors.neutral[50]};
  }
`;

const CurrencyVariation = styled.span<{ isPositive: boolean }>`
  font-weight: 500;
  color: ${({ isPositive }) => (isPositive ? modernColors.success[500] : modernColors.error[500])};
  min-width: 60px;
  text-align: right;
`;

const skeletonAnimation = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const SkeletonLoader = styled.div`
  height: 48px;
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

const CurrencyRates = () => {
  const [rates, setRates] = useState<CurrencyData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,JPY-BRL,CAD-BRL');
        if (!response.ok) {
          throw new Error('Falha ao buscar cotações.');
        }
        const data: ApiResponse = await response.json();
        // A API retorna um objeto, então convertemos para um array
        const ratesArray = Object.values(data);
        setRates(ratesArray);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ocorreu um erro desconhecido.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
    // Atualiza a cada 5 minutos
    const intervalId = setInterval(fetchRates, 300000); 

    return () => clearInterval(intervalId);
  }, []);

  const formatCurrency = (value: string) => {
    return parseFloat(value).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const renderContent = () => {
    if (loading && rates.length === 0) {
      return (
        <CurrencyList>
          {[...Array(5)].map((_, index) => <SkeletonLoader key={index} />)}
        </CurrencyList>
      );
    }

    if (error) {
      return <ErrorMessage>{error}</ErrorMessage>;
    }

    return (
      <CurrencyList>
        {rates.map((rate) => {
          const variation = parseFloat(rate.pctChange);
          const isPositive = variation >= 0;
          return (
            <CurrencyItem key={rate.code}>
              <CurrencyName>{rate.name.split('/')[0]}</CurrencyName>
              <CurrencyValue>{formatCurrency(rate.bid)}</CurrencyValue>
              <CurrencyVariation isPositive={isPositive}>
                {isPositive ? '▲' : '▼'} {variation.toFixed(2)}%
              </CurrencyVariation>
            </CurrencyItem>
          );
        })}
      </CurrencyList>
    );
  };

  return (
    <RatesContainer>
      <Title>Cotações</Title>
      {renderContent()}
    </RatesContainer>
  );
};

export default CurrencyRates;
