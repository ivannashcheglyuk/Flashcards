import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './App.css';

function App() {
  const cards = [
    { question: 'I am the largest land animal. What am I?', answer: 'Elephant', image: 'https://www.pixelstalk.net/wp-content/uploads/2016/08/Awesome-Elephant-Photos.jpg' },
    { question: 'I live in the ocean and have 8 arms. What am I?', answer: 'Octopus', image: 'https://www.publicdomainpictures.net/pictures/500000/velka/octopus-1678876804cKE.jpg' },
    { question: 'I am known as man’s best friend. What am I?', answer: 'Dog', image: 'https://wallpaperaccess.com/full/266770.jpg' },
    { question: 'I purr and like to chase mice. What am I?', answer: 'Cat', image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { question: 'I have a long neck and eat leaves from tall trees. What am I?', answer: 'Giraffe', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Giraffe_Mikumi_National_Park.jpg/1200px-Giraffe_Mikumi_National_Park.jpg' },
  ];


  const [index, setIndex] = useState(0);
  const [history, setHistory] = useState([0]); // history of indexes

  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const [guessCount, setGuessCount] = useState(0);



  const handleNext = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * cards.length);
    } while (newIndex === index);

    const newHistory = history.concat(newIndex);
    setHistory(newHistory);

    setIndex(newIndex);

    setUserAnswer('');
    setFeedback('');

    setGuessCount(0); // reset tries


  };

  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, history.length - 1);
      const previousIndex = newHistory[newHistory.length - 1];
      setHistory(newHistory);
      setIndex(previousIndex);

      //Reset everything for a clean try
      setUserAnswer('');
      setFeedback('');
      setGuessCount(0);
    }
  };

  const checkAnswer = () => {
    const correct = cards[index].answer.toLowerCase().trim();
    const guess = userAnswer.toLowerCase().trim();

    if (guess === correct) {
      setFeedback('✅ Correct!');
      setGuessCount(3); // allow flipping right away if correct
    } else {
      const newCount = guessCount + 1;
      setGuessCount(newCount);

      if (newCount >= 3) {
        setFeedback('❌ Out of tries! Flip the card to check the answer');
      } else {
        setFeedback(`❌ Try again (${newCount}/3)...`);
      }
    }
  };


  return (
    <div className="app-container">
      <h1>Animal Flashcards</h1>
      <div className="description">
        Guess the animal based on the question, then click the card to flip and check your answer.
      </div>
      <div className="total">Total cards: {cards.length}</div>

      <Flashcard card={cards[index]} canFlip={guessCount >= 3} />



      <div className="answer-section">
        <input
          type="text"
          placeholder="Your answer..."
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <button className="check-button" onClick={checkAnswer}>Check Answer</button>
        <div className="feedback">{feedback}</div>
      </div>


      <div className="button-group">
        <button className="back-button" onClick={handleBack} disabled={history.length <= 1}>
          ← Back
        </button>
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
export default App;
