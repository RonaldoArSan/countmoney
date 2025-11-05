import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/header';
import { StyleSheetManager } from 'styled-components';

import Calculator from './components/Calculator';
import CurrencyRates from './components/CurrencyRates';
import FinancialNews from './components/FinancialNews';

import PageFooter from './components/PageFooter';
import CookieConsent from './components/CookieConsent';
import styled, { createGlobalStyle } from 'styled-components';
import { modernColors, gradients, breakpoints } from './theme/colors';

type AppProps = Record<string, never>;

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        />
      </Helmet>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== 'darkMode'}>
        <AppContainer className="App">
          <GlobalStyle />
          <Header />
          <MainGrid>
            <CurrencyRates />
            <Calculator />
            <FinancialNews />
          </MainGrid>
          <PageFooter />
          <CookieConsent />
        </AppContainer>
      </StyleSheetManager>
    </>
  );
}

export default App;

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background: ${gradients.dark};
    color: ${modernColors.neutral[50]};
    min-height: 100vh;
    margin: 0;
    padding: 0;
    transition: all 0.3s ease;
    overflow: hidden;
  }

  body.dark-mode {
    background: ${gradients.dark};
    color: ${modernColors.neutral[50]};
  }

  body:not(.dark-mode) {
    background: ${gradients.light};
    color: ${modernColors.neutral[900]};
  }

  /* Scroll customization */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${modernColors.primary[400]};
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${modernColors.primary[500]};
  }

  /* Focus styles */
  *:focus {
    outline: 2px solid ${modernColors.primary[500]};
    outline-offset: 2px;
  }

  /* Selection styles */
  ::selection {
    background: ${modernColors.primary[200]};
    color: ${modernColors.primary[900]};
  }

  .dark-mode ::selection {
    background: ${modernColors.primary[600]};
    color: ${modernColors.neutral[50]};
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const MainGrid = styled.main`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* Três colunas: laterais e centro */
  gap: 1.5rem;
  padding: 70px 1.5rem 50px; /* Padding para header e footer */
  align-items: start;
  height: 100vh;
  box-sizing: border-box;
  overflow-y: auto;

  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: 1fr; /* Uma coluna em telas menores */
    padding: 60px 1rem 40px;
  }
`;
