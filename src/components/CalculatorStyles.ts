import styled from 'styled-components';
import { modernColors, gradients, shadows, breakpoints, lightTheme, darkTheme } from '../theme/colors';

export const CalculatorContainer = styled.div`
  width: 100%;
  max-width: 420px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: ${shadows.glass};
  backdrop-filter: blur(20px);
  margin: 0 auto;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  /* A altura será determinada pelo conteúdo, que se ajustará ao espaço */
  overflow: hidden; /* Garante que nada vaze */

  /* Glass morphism effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  }

  /* Mobile */
  @media (max-width: ${breakpoints.sm}) {
    max-width: 100%;
    margin: 0;
    border-radius: 16px;
  }

  /* Tablet */
  @media (max-width: ${breakpoints.md}) {
    max-width: 380px;
  }

  /* Dark mode */
  body.dark-mode & {
    background: rgba(15, 23, 42, 0.9);
    border: 1px solid rgba(99, 102, 241, 0.2);
    box-shadow: ${shadows.glass}, 0 0 40px rgba(99, 102, 241, 0.1);
  }

  /* Hover effect */
  &:hover {
    transform: translateY(-1px);
    box-shadow: ${shadows.xl}, 0 0 20px rgba(99, 102, 241, 0.1);
  }

  @media (hover: none) {
    &:hover {
      transform: none;
    }
  }
`;

export const TotalDisplay = styled.div`
  background: ${gradients.glass};
  color: ${lightTheme.text.primary};
  font-size: clamp(2rem, 6vh, 3.5rem); /* Fonte maior e responsiva */
  font-weight: 500;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  margin-bottom: 0.5rem;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 80px; /* Altura mínima */
  box-shadow: ${shadows.glass};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  .currency-symbol {
    font-size: clamp(1.2rem, 4vh, 2rem);
    margin-right: 0.5rem;
    opacity: 0.7;
  }

  body.dark-mode & {
    background: ${gradients.glassDark};
    color: ${darkTheme.text.primary};
    border-color: rgba(255, 255, 255, 0.08);
  }
`;

export const DenominationsForm = styled.div`
  padding: 0.5rem;
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: clamp(0.2rem, 1vh, 0.4rem); /* Gap dinâmico baseado na altura da tela */
  overflow: hidden; /* Scroll desabilitado */
`;

export const DenominationRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: clamp(0.1rem, 0.5vh, 0.2rem) 0.5rem; /* Padding dinâmico */
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.05);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  body.dark-mode & {
    background-color: rgba(0, 0, 0, 0.1);
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

export const DenominationLabel = styled.label`
  color: ${modernColors.neutral[900]};
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: -0.01em;
  cursor: pointer;
  transition: color 0.2s ease;

  /* Mobile */
  @media (max-width: ${breakpoints.sm}) {
    font-size: 0.75rem;
  }

  /* Dark mode */
  body.dark-mode & {
    color: ${modernColors.neutral[100]};
  }

  /* Hover effect */
  &:hover {
    color: ${modernColors.primary[600]};
  }

  body.dark-mode &:hover {
    color: ${modernColors.primary[400]};
  }
`;

export const QuantityInput = styled.input`
  padding: 0.4rem 0.6rem;
  border: 2px solid ${modernColors.neutral[200]};
  border-radius: 8px;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
  width: 55px;
  color: ${modernColors.neutral[900]};
  background: white;
  transition: all 0.2s ease;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);

  /* Focus state */
  &:focus {
    border-color: ${modernColors.primary[500]};
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.1);
    outline: none;
    background: white;
  }

  /* Number input controls */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    opacity: 1;
    height: 25px;
  }

  /* Mobile */
  @media (max-width: ${breakpoints.sm}) {
    padding: 0.35rem 0.5rem;
    font-size: 0.75rem;
    width: 50px;
  }

  /* Dark mode */
  body.dark-mode & {
    background: ${modernColors.neutral[800]};
    color: ${modernColors.neutral[100]};
    border-color: ${modernColors.neutral[600]};
    
    &:focus {
      border-color: ${modernColors.primary[400]};
      background: ${modernColors.neutral[700]};
      box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
    }
  }
`;

export const RowSubtotal = styled.span`
  font-weight: 700;
  color: ${modernColors.primary[600]};
  font-size: 0.8rem;
  min-width: 65px;
  text-align: right;
  letter-spacing: -0.01em;
  transition: color 0.2s ease;

  /* Mobile */
  @media (max-width: ${breakpoints.sm}) {
    font-size: 0.75rem;
    min-width: 60px;
  }

  /* Dark mode */
  body.dark-mode & {
    color: ${modernColors.primary[400]};
  }
`;

export const ClearRowButton = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: none;
  background: ${modernColors.error[100]};
  color: ${modernColors.error[600]};
  font-size: 0.9rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  /* Hover effect */
  &:hover {
    background: ${modernColors.error[200]};
    transform: scale(1.1);
    color: ${modernColors.error[700]};
  }

  /* Active effect */
  &:active {
    transform: scale(0.95);
  }

  /* Focus effect */
  &:focus {
    outline: 2px solid ${modernColors.error[400]};
    outline-offset: 2px;
  }

  /* Mobile */
  @media (max-width: ${breakpoints.sm}) {
    width: 24px;
    height: 24px;
    font-size: 0.8rem;
  }

  /* Dark mode */
  body.dark-mode & {
    background: ${modernColors.error[900]};
    color: ${modernColors.error[300]};
    
    &:hover {
      background: ${modernColors.error[800]};
      color: ${modernColors.error[200]};
    }
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
    background: rgba(255, 255, 255, 0.5);
    transform: translate(-50%, -50%);
    transition: width 0.3s, height 0.3s;
  }

  &:active::before {
    width: 100%;
    height: 100%;
  }
`;

export const ClearAllButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: ${gradients.accent};
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;
  box-shadow: ${shadows.sm};

  /* Hover effect */
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.md};
    background: ${gradients.accent};
  }

  /* Active effect */
  &:active {
    transform: translateY(-1px);
  }

  /* Focus effect */
  &:focus {
    outline: 2px solid rgba(249, 115, 22, 0.3);
    outline-offset: 2px;
  }

  /* Mobile */
  @media (max-width: ${breakpoints.sm}) {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    margin-top: 0.4rem;
  }

  /* Dark mode */
  body.dark-mode & {
    background: linear-gradient(135deg, ${modernColors.error[600]} 0%, ${modernColors.error[700]} 100%);
    box-shadow: ${shadows.sm}, 0 0 15px rgba(239, 68, 68, 0.2);
    
    &:hover {
      box-shadow: ${shadows.md}, 0 0 20px rgba(239, 68, 68, 0.3);
    }
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
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.4s, height 0.4s;
  }

  &:active::before {
    width: 300%;
    height: 300%;
  }
`;
