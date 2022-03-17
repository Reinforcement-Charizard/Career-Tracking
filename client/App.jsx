import React, { Component } from 'react';
import './style.scss';
import Card from './components/Card.jsx';
import CardCreator from './components/CardCreator.jsx';
import UpdateCard from './components/updateCard.jsx';
import CardsDisplay from './components/CardsDisplay.jsx';
import CardsContainer from './containers/CardsContainer.jsx';
import * as actions from './actions/actions.js';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  const { placeholder } = state;  
  return { 
    name: placeholder.activeUser,
    jobModal: placeholder.jobModal,
  }
}


function mapDispatchToProps(dispatch) {
  return {
    activeUser: (data) => dispatch(actions.activeUser(data)),
    displayJobModal: (data) => dispatch(actions.displayJobModal(data)),
    populateColumns: (data) => dispatch(actions.populateColumns(data))
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.fetching = this.fetching.bind(this);
    this.handleJobButton = this.handleJobButton.bind(this);
  }

  handleJobButton(event) {
    event.preventDefault();
    if (!this.props.jobModal) {
      this.props.displayJobModal(true);
    } else {
      this.props.displayJobModal(false);
    }
  }

  fetching(){
    fetch('http://localhost:3000/api', {
      method: 'GET',
      credentials: 'include'
    })
    .then((data) => data.json())
    .then((data) => {
      this.props.activeUser(data)
      this.props.populateColumns(data.data)
    })
    .catch((err) => console.log(err))
  }
  render(){
    const url = new URL(window.location);
    const token = url.search; // ?access_token=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&scope=&token_type=bearer

    const URL_PARAMS = new URLSearchParams(token);
    const accessToken = URL_PARAMS.get('access_token');
    let name;
    if (url.search) {
    name = url.search.split('?')[2].split('=')[1]
    history.replaceState('', '', '/');
    this.fetching();
  } 

    return (
      
    <section>
    <div className="appDiv">
      <h1>Hello{this.props.name ? ' ' + this.props.name +'!' : ', please click below to sign in.'}</h1>
      <div className="buttonDiv">
        <button className="appButton" onClick={()=>{window.location.replace('http://localhost:3000/oauth')}}>Login with GitHub</button>
        {this.props.name ? <button className="appButton" onClick={this.handleJobButton}>Create New Job</button> : null}
      </div>
      <div className="cardCreatorDiv">
      {/* <Card /> */}
      {/* <CardCreator /> */}
      {this.props.jobModal ? <CardCreator /> : null}
      {/* <UpdateCard /> */}
      </div>
      <CardsContainer />
    </div>
  </section>
    )
  }
}

// const App = () => {


//  return(
//   <section>
//     <div>
//       <h1>Hello {name}</h1>
//       <button>Auth test</button>
//       <button>Create New Job</button>
//       <Card />
//       <CardCreator />
//       <UpdateCard />
//       <CardsContainer />
//     </div>
//   </section>
// )}

export default connect(mapStateToProps, mapDispatchToProps)(App);
