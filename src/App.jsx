import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './App.css';

function App() {
  const cards = [
    { question: 'I am the largest land animal. What am I?', answer: 'Elephant',image: 'https://www.pixelstalk.net/wp-content/uploads/2016/08/Awesome-Elephant-Photos.jpg' },
    { question: 'I live in the ocean and have 8 arms. What am I?', answer: 'Octopus', image: 'https://www.publicdomainpictures.net/pictures/500000/velka/octopus-1678876804cKE.jpg' },
    { question: 'I am known as man’s best friend. What am I?', answer: 'Dog', image: 'https://wallpaperaccess.com/full/266770.jpg' },
    { question: 'I purr and like to chase mice. What am I?', answer: 'Cat',image:'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { question: 'I have a long neck and eat leaves from tall trees. What am I?', answer: 'Giraffe',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Giraffe_Mikumi_National_Park.jpg/1200px-Giraffe_Mikumi_National_Park.jpg' },
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * cards.length);
    } while (newIndex === index);
    setIndex(newIndex);
  };

  return (
    <div className="app-container">
      <h1>Animal Flashcards</h1>
      <div className="description">Guess the animal based on the question, then click the card to flip and check your answer.</div>
      <div className="total">Total cards: {cards.length}</div>

      <Flashcard card={cards[index]} />

      <button className="next-button" onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;

