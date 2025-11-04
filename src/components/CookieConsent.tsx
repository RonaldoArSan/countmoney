import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { modernColors, gradients, shadows, breakpoints } from '../theme/colors';

const COOKIE_KEY = "cookie_consent_accepted";

const CookieConsentBanner = styled.div`
  position: fixed;
  bottom: 80px; /* Above footer */
  left: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: ${modernColors.neutral[900]};
  padding: 1.5rem;
  border-radius: 16px;
  z-index: 999;
  box-shadow: ${shadows.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
  transition: all 0.3s ease;
  animation: slideUp 0.4s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* Mobile adjustments */
  @media (max-width: ${breakpoints.sm}) {
    bottom: 70px;
    left: 0.5rem;
    right: 0.5rem;
    padding: 1.25rem;
    border-radius: 12px;
  }

  /* Dark mode */
  body.dark-mode & {
    background: rgba(15, 23, 42, 0.95);
    border-color: rgba(99, 102, 241, 0.2);
    color: ${modernColors.neutral[100]};
    box-shadow: ${shadows.xl}, 0 0 30px rgba(99, 102, 241, 0.1);
  }

  /* Glassmorphism effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${gradients.glass};
    border-radius: inherit;
    pointer-events: none;
  }
`;

const CookieText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  text-align: center;
  position: relative;
  z-index: 1;
  letter-spacing: 0.01em;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 0.85rem;
    text-align: left;
  }
`;

const CookieLink = styled.a`
  color: ${modernColors.primary[600]};
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease;

  &:hover {
    color: ${modernColors.primary[700]};
    border-bottom-color: ${modernColors.primary[700]};
  }

  /* Dark mode */
  body.dark-mode & {
    color: ${modernColors.primary[400]};
    
    &:hover {
      color: ${modernColors.primary[300]};
      border-bottom-color: ${modernColors.primary[300]};
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  position: relative;
  z-index: 1;

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
    flex-direction: column;
  }
`;

const CookieButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  background: ${props => props.variant === 'secondary' 
    ? 'transparent' 
    : gradients.primary
  };
  color: ${props => props.variant === 'secondary' 
    ? modernColors.neutral[600] 
    : 'white'
  };
  border: ${props => props.variant === 'secondary' 
    ? `2px solid ${modernColors.neutral[300]}` 
    : 'none'
  };
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-width: 100px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.md};
    background: ${props => props.variant === 'secondary' 
      ? modernColors.neutral[50] 
      : gradients.primary
    };
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: 2px solid ${modernColors.primary[400]};
    outline-offset: 2px;
  }

  /* Ripple effect */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.3s, height 0.3s;
  }

  &:active::before {
    width: 200%;
    height: 200%;
  }

  /* Mobile adjustments */
  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
    padding: 1rem;
  }

  /* Dark mode */
  body.dark-mode & {
    ${props => props.variant === 'secondary' && `
      color: ${modernColors.neutral[300]};
      border-color: ${modernColors.neutral[600]};
      
      &:hover {
        background: ${modernColors.neutral[800]};
        border-color: ${modernColors.neutral[500]};
      }
    `}
  }
`;

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY);
    if (!accepted) {
      // Delay to allow page to load
      setTimeout(() => setVisible(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_KEY, "true");
    setVisible(false);
  };

  const declineCookies = () => {
    // For now, just hide the banner. In a real app, you might want to disable tracking
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <CookieConsentBanner>
      <CookieText>
        🍪 Utilizamos cookies para melhorar sua experiência e coletar dados estatísticos. 
        Ao continuar navegando, você concorda com nossa{" "}
        <CookieLink
          href="/privacy.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Política de Privacidade
        </CookieLink>.
      </CookieText>
      <ButtonContainer>
        <CookieButton variant="secondary" onClick={declineCookies}>
          Recusar
        </CookieButton>
        <CookieButton onClick={acceptCookies}>
          Aceitar Cookies
        </CookieButton>
      </ButtonContainer>
    </CookieConsentBanner>
  );
};

export default CookieConsent;
