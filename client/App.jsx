import React from 'react';
import './style.scss';
import Card from './components/Card.jsx';
import CardCreator from './components/CardCreator.jsx';
import UpdateCard from './components/updateCard.jsx';
import CardsDisplay from './components/CardsDisplay.jsx';

const dummyProps = {};

function App() {
  return (
    <section>
      <div>
        <h1>Hello World from App</h1>
        <Card />
        <CardCreator />
        <UpdateCard />
        <CardsDisplay />
      </div>
    </section>
  );
}

export default App;
