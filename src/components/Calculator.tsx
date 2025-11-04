import React, { useState, useEffect } from 'react';
import {
  CalculatorContainer,
  TotalDisplay,
  DenominationsForm,
  DenominationRow,
  DenominationLabel,
  QuantityInput,
  RowSubtotal,
  ClearRowButton,
  ClearAllButton
} from './CalculatorStyles';

const CURRENCY_DATA = {
  BR: { symbol: 'R$', locale: 'pt-BR', currency: 'BRL' },
  US: { symbol: '$', locale: 'en-US', currency: 'USD' },
  GB: { symbol: '£', locale: 'en-GB', currency: 'GBP' },
  JP: { symbol: '¥', locale: 'ja-JP', currency: 'JPY' },
  DE: { symbol: '€', locale: 'de-DE', currency: 'EUR' }
};

const TRANSLATIONS = {
  BR: { clearAll: 'Limpar Tudo', total: 'Total' },
  US: { clearAll: 'Clear All', total: 'Total' },
  GB: { clearAll: 'Clear All', total: 'Total' },
  JP: { clearAll: 'すべてクリア', total: '合計' },
  DE: { clearAll: 'Alles löschen', total: 'Gesamt' }
};

interface QuantityMap {
  [key: string]: number;
}

export const Calculator: React.FC = () => {
  const [quantities, setQuantities] = useState<QuantityMap>({
    '200': 0,
    '100': 0,
    '50': 0,
    '20': 0,
    '10': 0,
    '5': 0,
    '2': 0,
    '1': 0,
    '0.5': 0,
    '0.25': 0,
    '0.1': 0,
    '0.05': 0,
    '0.01': 0
  });

  const [grandTotal, setGrandTotal] = useState<number>(0);
  const countryCode = 'BR'; // Valor fixo para o código do país

  const calculateTotal = React.useCallback(() => {
    const total = Object.entries(quantities).reduce((sum, [denomination, quantity]: [string, number]) => {
      return sum + (parseFloat(denomination) * quantity);
    }, 0);
    setGrandTotal(total);
  }, [quantities]);

  useEffect(() => {
    calculateTotal();
  }, [calculateTotal]);

  const handleQuantityChange = (denomination: string, value: string) => {
    const newQuantity = parseInt(value) || 0;
    setQuantities(prev => ({
      ...prev,
      [denomination]: newQuantity
    }));
  };

  const clearRow = (denomination: string) => {
    setQuantities(prev => ({
      ...prev,
      [denomination]: 0
    }));
  };

  const clearAll = () => {
    setQuantities(Object.fromEntries(
      Object.keys(quantities).map(key => [key, 0])
    ));
  };

  const formatCurrency = (value: number) => {
    const currencyData = CURRENCY_DATA[countryCode] || CURRENCY_DATA['BR'];
    return value.toLocaleString(currencyData.locale, {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const translate = (key: keyof typeof TRANSLATIONS['BR']) => {
    return TRANSLATIONS[countryCode]?.[key] || key;
  };

  // Add haptic feedback for mobile devices
  const handleMobileAction = (action: () => void) => {
    if ('vibrate' in navigator) {
      navigator.vibrate(50); // Subtle haptic feedback
    }
    action();
  };

  return (
    <CalculatorContainer className="fade-in">
      <TotalDisplay>
        <span className="currency-symbol">R$</span>
        <span id="grand-total">
          {formatCurrency(grandTotal)}
        </span>
      </TotalDisplay>

      <DenominationsForm>
        {Object.entries(quantities)
          .sort((a, b) => parseFloat(b[0]) - parseFloat(a[0]))
          .map(([denomination, quantity]) => (
            <DenominationRow key={denomination}>
              <DenominationLabel>
                R$ {formatCurrency(parseFloat(denomination))}
              </DenominationLabel>

              <RowSubtotal>
                {formatCurrency(parseFloat(denomination) * quantity)}
              </RowSubtotal>
              
              <QuantityInput
                type="number"
                min="0"
                inputMode="numeric"
                pattern="[0-9]*"
                value={quantity === 0 ? '' : quantity}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  handleQuantityChange(denomination, e.target.value)
                }
                onFocus={(e) => e.target.select()}
                placeholder="0"
              />
              
              <ClearRowButton 
                onClick={() => handleMobileAction(() => clearRow(denomination))}
                aria-label={`Limpar quantidade de R$ ${denomination}`}
              >
                ×
              </ClearRowButton>
            </DenominationRow>
          ))}
        <ClearAllButton 
          onClick={() => handleMobileAction(clearAll)}
          aria-label="Limpar todas as quantidades"
        >
          {translate('clearAll')}
        </ClearAllButton>
      </DenominationsForm>
    </CalculatorContainer>
  );
};

export default Calculator;
