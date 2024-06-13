import { memo, useState } from 'react';
import './Card.css';

function Card({ description, value, gained, price, buyCard }) {
  const [bought, setBought] = useState(gained);

  const handleBuyCard = () => {
    const buyResponse = buyCard(price, value);
    if (buyResponse) {
      setBought(true);
    }
  }

  return (
    <div className="card">
      <p className="card-content">
        {description}
      </p>
      <button
        className="buy-button"
        onClick={handleBuyCard}
        disabled={bought}
      >
        {bought ? "Bought" : "Buy"}
      </button>
    </div>
  );
}

export default memo(Card);
