import React from 'react';
import Card from './Card.jsx'
import './componentStyling/cardsDisplay.scss'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  state: { ...state }
})

const CardsDisplay = props => {
const { interested, applied, interviewOne, interviewTwo, offered } = this.props.state

//drag and drop here ????

// linkedlist thing
  // loop and create new cards and push in columns

// render card creator button on top right of the page

// return 5 columns
return (
  <div class="MainContainer">
    <div class="row">
      <div class="column">{interested}</div>
      <div class="column">{applied}</div>
      <div class="column">{interviewOne}</div>
      <div class="column">{interviewTwo}</div>
      <div class="column">{offered}</div>
    </div>
  </div>
)
};


export default connect(mapStateToProps, null)(CardsDisplay);