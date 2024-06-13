import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { cardConfig } from './config';
import Card from './components/Card/Card';

function App() {
  const [balance, setBalance] = useState(500);
  const [incrementValue, setIncrementValue] = useState(0);

  const handleBuyCard = (price, value) => {
    if (balance - price < 0) {
      alert("Insufficient funds");
      return false;
    }
    setBalance(prev => prev - price)
    setIncrementValue(prev => prev + value)

    return true;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBalance(prev => prev + incrementValue);
    }, 3000);

    return () => clearInterval(interval);
  }, [incrementValue]);

  return (
    <div className="app">
      <main className="app-content">
        <p>{balance}</p>
        <ul className="app-card-container">
          {cardConfig.map(card => (<li>
            <Card
              {...card}
              key={String(card.time + card.value)}
              buyCard={handleBuyCard}
            />
          </li>))}
        </ul>
      </main>
    </div>
  );
}

export default App;
