import React from 'react';
import './style.scss';
import Card from './components/Card.jsx'
import CardCreator from './components/CardCreator.jsx'
import UpdateCard from './components/updateCard.jsx'

const url = new URL(window.location);
const token = url.search; // ?access_token=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&scope=&token_type=bearer

const URL_PARAMS = new URLSearchParams(token);
const accessToken = URL_PARAMS.get('access_token');
let name;
if (url.search) {
  name = url.search.split('?')[2].split('=')[1]
  history.replaceState('', '', '/');
} 


const App = () => (
  <section>
    <div>
      <h1>Hello World from App</h1>
      <button onClick={()=>{window.location.replace('http://localhost:3000/oauth')}}>Oauth test</button>
      <Card />
      <CardCreator />
      <UpdateCard />     
    </div>
  </section>
)

export default App;