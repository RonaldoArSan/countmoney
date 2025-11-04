import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { modernColors, gradients, shadows, breakpoints } from '../theme/colors';

const PageHeader = styled.header<{ darkMode: boolean; isPWA?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.isPWA ? '0px' : '50px'};
  background: ${props => props.darkMode 
    ? 'rgba(15, 23, 42, 0.95)' 
    : 'rgba(255, 255, 255, 0.95)'
  };
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${props => props.darkMode 
    ? 'rgba(99, 102, 241, 0.2)' 
    : 'rgba(0, 0, 0, 0.1)'
  };
  color: ${props => props.darkMode ? modernColors.neutral[50] : modernColors.neutral[900]};
  box-shadow: ${shadows.sm};
  display: ${props => props.isPWA ? 'none' : 'flex'};
  z-index: 1000;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  transition: all 0.3s ease;

  /* Mobile adjustments */
  @media (max-width: ${breakpoints.sm}) {
    height: ${props => props.isPWA ? '0px' : '45px'};
    padding: 0 0.75rem;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  gap: 1rem;

  @media (max-width: ${breakpoints.sm}) {
    gap: 0.5rem;
  }
`;

const HeaderGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 100%;
  z-index: 1;
  position: relative;

  @media (max-width: ${breakpoints.sm}) {
    gap: 0.5rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  z-index: 1;
  position: relative;
`;

const LogoImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  object-fit: cover;
  border: 2px solid ${modernColors.primary[500]};
  transition: all 0.3s ease;
  box-shadow: ${shadows.sm};

  &:hover {
    transform: scale(1.05) rotate(5deg);
    border-color: ${modernColors.primary[400]};
    box-shadow: ${shadows.md};
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 25px;
    height: 25px;
  }
`;

const AppTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  background: ${gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  letter-spacing: -0.02em;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1rem;
    display: none; /* Hide on mobile to save space */
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const UserLocation = styled.span`
  font-weight: 500;
  font-size: 0.875rem;
  opacity: 0.9;
  white-space: nowrap;
  padding: 0.5rem 1rem;
  background: rgba(99, 102, 241, 0.1);
  color: ${modernColors.primary[700]};
  border-radius: 20px;
  border: 1px solid rgba(99, 102, 241, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(99, 102, 241, 0.15);
    transform: translateY(-1px);
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 0.75rem;
    padding: 0.375rem 0.75rem;
    display: none; /* Hide on mobile */
  }

  /* Dark mode */
  body.dark-mode & {
    background: rgba(99, 102, 241, 0.2);
    color: ${modernColors.primary[300]};
    border-color: rgba(99, 102, 241, 0.3);
    
    &:hover {
      background: rgba(99, 102, 241, 0.25);
    }
  }
`;

const ToggleButton = styled.button`
  background: ${modernColors.primary[500]};
  border: none;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: ${shadows.sm};
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${modernColors.primary[600]};
    transform: translateY(-1px);
    box-shadow: ${shadows.md};
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: 2px solid ${modernColors.primary[400]};
    outline-offset: 2px;
  }

  /* Mobile */
  @media (max-width: ${breakpoints.sm}) {
    padding: 0.4rem 0.6rem;
    font-size: 0.7rem;
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

  /* Dark mode */
  body.dark-mode & {
    background: ${modernColors.primary[600]};
    
    &:hover {
      background: ${modernColors.primary[500]};
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: currentColor;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(99, 102, 241, 0.1);
  }

  @media (max-width: ${breakpoints.sm}) {
    display: block;
  }
`;

function Header() {
  const [location, setLocation] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
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

  useEffect(() => {
    const root = document.getElementById('root');
    if (darkMode) {
      document.body.classList.add('dark-mode');
      root?.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      root?.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
          );
          const data = await response.json();
          setLocation(data.address.country || 'País desconhecido');
        } catch (error) {
          console.error('Erro ao obter localização:', error);
          setLocation('Localização indisponível');
        }
      });
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <PageHeader darkMode={darkMode} isPWA={isPWA}>
      <HeaderContent>
        <LogoContainer>
          <LogoImage src="/logo.JPG" alt="CountMoney Logo" />
          <AppTitle>CountMoney</AppTitle>
        </LogoContainer>
        
        <HeaderGroup>
          {location && <UserLocation>📍 {location}</UserLocation>}
          <ToggleButton onClick={toggleTheme}>
            {darkMode ? '☀️ Claro' : '🌙 Escuro'}
          </ToggleButton>
          <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </MobileMenuButton>
        </HeaderGroup>
      </HeaderContent>
    </PageHeader>
  );
}

export default Header;
