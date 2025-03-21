
import getData from './services/getExchangeRate';
import { useState, useEffect } from 'react';
import currencyCodes from 'currency-codes';
import './App.css';

interface ExchangeRatesResponse {
  table: string;
  rates: Record<string, number>;
  lastupdate: string;
}

function App() {
  const [exchangeRate, setExchangeRate] = useState<ExchangeRatesResponse | null>(null);
  const [iso, setIso] = useState<string[]>([]);
  const [currency, setCurrency] = useState<number[]>([]);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      const data = await getData();
      setExchangeRate(data);
    };
    fetchExchangeRate();
  }, []);

  useEffect(() => {
    if (exchangeRate?.rates) {
      setIso(Object.keys(exchangeRate.rates));
      setCurrency(Object.values(exchangeRate.rates));
    }
  }, [exchangeRate]);

  return (
    <div className="App">
      {!exchangeRate ? (
        'Cargando...'
      ) : (
        <div className='card'>
          <label htmlFor="currencyOne">Selecciona una moneda:</label>
          <select className='selectTag' id="currencyOne" name="opciones">
            {/* Opción predeterminada USD */}
            <option key="nothing" value="NTH">
              Select a currency
            </option>

            {/* Mapeo de monedas */}
            {iso.map((currencyCode, index) => {
              const currencyInfo = currencyCodes.code(currencyCode);
              return (
                <option key={index} value={index}>
                  {currencyInfo ? `${currencyInfo.code} - ${currencyInfo.currency}` : currencyCode}
                </option>
              );
            })}
          </select>
          <div>
            1 USD = {currency[34]} {iso[34]}
          </div>
          <div>
            1 COP = {currency[158]/currency[34]} USD
          </div>
        </div>
      )}
      {!exchangeRate ? (
        'Cargando...'
      ) : (
        <div className='card'>
          <label htmlFor="currencyTwo">Selecciona una moneda:</label>
          <select className='selectTag' id="currencyTwo" name="opciones">
          {/* Opción predeterminada USD */}
          <option key="nothing" value="NTH">
            Select a currency
          </option>

          {/* Mapeo de monedas */}
          {iso.map((currencyCode, index) => {
            const currencyInfo = currencyCodes.code(currencyCode);
            return (
              <option key={index} value={index}>
                {currencyInfo ? `${currencyInfo.code} - ${currencyInfo.currency}` : currencyCode}
              </option>
            );
          })}
          </select>
          <div>
            1 USD = {currency[158]} {iso[158]}
          </div>
          <div>
            1 USD = {currency[34]/currency[158]} COP
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
