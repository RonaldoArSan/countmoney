
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { modernColors, gradients, breakpoints } from '../theme/colors';

const PageFooterStyled = styled.footer<{ isPWA?: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${props => props.isPWA ? '0px' : '35px'};
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: ${modernColors.neutral[700]};
  text-align: center;
  padding: 0 0.75rem;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.06);
  font-weight: 500;
  font-size: 0.7rem;
  z-index: 1000;
  display: ${props => props.isPWA ? 'none' : 'flex'};
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  /* Mobile adjustments */
  @media (max-width: ${breakpoints.sm}) {
    height: ${props => props.isPWA ? '0px' : '30px'};
    padding: 0 0.5rem;
    font-size: 0.65rem;
    gap: 0.3rem;
  }

  /* Dark mode */
  body.dark-mode & {
    background: rgba(15, 23, 42, 0.95);
    border-top: 1px solid rgba(99, 102, 241, 0.2);
    color: ${modernColors.neutral[300]};
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.3);
  }

  /* Glassmorphism effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.1);
    pointer-events: none;
  }

  body.dark-mode &::before {
    background: ${gradients.glass};
  }
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  position: relative;
  z-index: 1;
  flex-wrap: nowrap;

  @media (max-width: ${breakpoints.sm}) {
    gap: 0.2rem;
  }
`;

const CopyrightText = styled.span`
  letter-spacing: 0.02em;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const BrandName = styled.span`
  font-weight: 700;
  background: ${gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 0.8rem;
  letter-spacing: -0.01em;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 0.75rem;
  }
`;

const Separator = styled.span`
  color: ${modernColors.primary[400]};
  font-weight: bold;
  opacity: 0.6;

  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;

const MadeWithLove = styled.span`
  display: none; /* Hide completely to save space */

  .heart {
    color: ${modernColors.error[500]};
    animation: heartbeat 2s ease-in-out infinite;
  }

  @keyframes heartbeat {
    0% { transform: scale(1); }
    14% { transform: scale(1.1); }
    28% { transform: scale(1); }
    42% { transform: scale(1.1); }
    70% { transform: scale(1); }
  }
`;

function PageFooter() {
  const currentYear = new Date().getFullYear();
  const [isPWA, setIsPWA] = useState<boolean>(false);

  // Detectar se está rodando como PWA
  useEffect(() => {
    const checkPWA = () => {
      const isPWAMode = 
        window.matchMedia('(display-mode: standalone)').matches ||
        window.matchMedia('(display-mode: fullscreen)').matches ||
        (window.navigator as any).standalone === true ||
        document.referrer.includes('android-app://');
      
      setIsPWA(isPWAMode);
    };

    checkPWA();
    window.addEventListener('resize', checkPWA);
    
    return () => window.removeEventListener('resize', checkPWA);
  }, []);

  return (
    <PageFooterStyled isPWA={isPWA}>
      <FooterContent>
        <CopyrightText>
          &copy; {currentYear}
        </CopyrightText>
        <BrandName>Moncoy</BrandName>
        <Separator>•</Separator>
        <CopyrightText>
          Todos os direitos reservados
        </CopyrightText>
        <MadeWithLove>
          Feito com <span className="heart">♥</span>
        </MadeWithLove>
      </FooterContent>
    </PageFooterStyled>
  );
}

export default PageFooter;
