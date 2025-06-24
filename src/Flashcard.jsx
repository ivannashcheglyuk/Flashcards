import React, { useState, useEffect } from 'react';

function Flashcard({ card, canFlip }) {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    if (canFlip) {
      setFlipped(!flipped);
    }
  };

  useEffect(() => {
    setFlipped(false);
  }, [card]);

  return (
    <div className="flashcard-section">
      <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={toggleFlip}>
        <div className="front">{card.question}</div>
        <div className="back">
          {card.answer}
          <img src={card.image} alt={card.answer} className="animal-image" />
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
