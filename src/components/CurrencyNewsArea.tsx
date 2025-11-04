

import styled from 'styled-components';

const CurrencyNewsAreaSection = styled.section`
    width: calc(100% - 40px); /* Adjust width considering padding */
    max-width: 1800px;
    margin: 30px auto;
    padding: 25px;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.07);
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap; /* Allow wrapping */
    gap: 25px;
`;

const StyledH2 = styled.h2`
    width: 100%;
    text-align: center;
    margin-bottom: 25px;
    color: #3f51b5; /* Indigo */
    border-bottom: 2px solid #e8eaf6; /* Light Indigo */
    padding-bottom: 15px;
    flex-basis: 100%;
    font-size: 1.8em;
    font-weight: 700;
`;

const CurrencyNewsAreaArticle = styled.article`
    flex: 1 1 300px; /* Allow flexible wrapping */
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #e0e0e0;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 15px rgba(0,0,0,0.08);
    }
`;

const CurrencyNewsAreaH3 = styled.h3`
    margin-top: 0;
    margin-bottom: 12px;
    color: #5c6bc0; /* Indigo */
    font-size: 1.3em;
    font-weight: 500;
`;

const CurrencyNewsAreaP = styled.p`
    font-size: 0.95em;
    line-height: 1.7;
    color: #546e7a; /* Blue Grey */
`;

function CurrencyNewsArea() {
  return (
    <CurrencyNewsAreaSection>
      <StyledH2>Informações da Moeda e Notícias</StyledH2>
      <CurrencyNewsAreaArticle>
        <CurrencyNewsAreaH3>Sobre o Real (BRL)</CurrencyNewsAreaH3>
        <CurrencyNewsAreaP>Carregando informações...</CurrencyNewsAreaP>
      </CurrencyNewsAreaArticle>
      <CurrencyNewsAreaArticle>
        <CurrencyNewsAreaH3>Notícias do Mercado</CurrencyNewsAreaH3>
        <CurrencyNewsAreaP>Carregando notícias...</CurrencyNewsAreaP>
      </CurrencyNewsAreaArticle>
    </CurrencyNewsAreaSection>
  );
}

export default CurrencyNewsArea;
