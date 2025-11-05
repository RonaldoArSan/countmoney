import styled from 'styled-components';
import { modernColors, shadows, breakpoints } from '../theme/colors';

const ContentWrapper = styled.section`
  padding: 2rem 1rem;
  margin: 1.5rem auto;
  max-width: 800px;
  background-color: ${modernColors.neutral[100]};
  border-radius: 16px;
  box-shadow: ${shadows.md};

  body.dark-mode & {
    background-color: ${modernColors.neutral[900]};
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 1.5rem;
    margin: 1rem;
  }
`;

const ContentTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${modernColors.primary[600]};
  margin-bottom: 1rem;
  text-align: center;

  body.dark-mode & {
    color: ${modernColors.primary[400]};
  }
`;

const ContentParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${modernColors.neutral[700]};
  margin-bottom: 1rem;

  body.dark-mode & {
    color: ${modernColors.neutral[300]};
  }
`;

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ title, children }) => {
  return (
    <ContentWrapper>
      <ContentTitle>{title}</ContentTitle>
      {children}
    </ContentWrapper>
  );
};

export { ContentParagraph };
