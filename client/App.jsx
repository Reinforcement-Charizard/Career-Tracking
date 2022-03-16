import React from 'react';
import './style.scss';
import Card from './components/Card.jsx'
import CardCreator from './components/CardCreator.jsx'
import UpdateCard from './components/updateCard.jsx'

const dummyProps = {

}


const App = () => (
  <section>
    <div>
      <h1>Hello World from App</h1>
      <Card />
      {/* <CardCreator /> */}
      {/* <UpdateCard />      */}
    </div>
  </section>
)

export default App;