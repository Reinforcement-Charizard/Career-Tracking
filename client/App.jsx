<<<<<<< HEAD
import React from 'react';
import './style.scss';
import Card from './components/Card.jsx'

const App = () => (
  <section>
    <div>
      <h1>Hello World from App</h1>
      <Card />
    </div>
  </section>
)

=======
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
      <CardCreator />
      <UpdateCard />     
    </div>
  </section>
)

>>>>>>> 90c2f739c8dc9e6260e1c44486b2342058f0f464
export default App;