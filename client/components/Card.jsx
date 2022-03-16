import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import updateCard from './componentStyling/card.scss'


const mapDispatchToProps = dispatch => ({
  // update Card
  deleteCardAction: (cardId) => {
    dispatch(actions.deleteCardAction(cardId))
  }
})

const Card = props => {

const date = new Date().toLocaleDateString();

// event handler for deleting card
  // 
const deleteCardEvent = (marketId) => {
  // build structure of request

  // await response
  fetch('http://localhost:8080/api/delete')
    .then((res) => {res.json()})
    .then((res) => {this.props.deleteCardAction(res.cardId)})
    .catch((err) => {console.log('error in deleteCardEvent: ', err)})
};

// event handler for updating job
  // /api/updateJob
  // this needs to go elsewhere on the popup page for the update card


  return (
  <div className="cardBox">
    <h2 className = "title">{props.title}</h2>
    <h3 className = "companyName">{props.companyName}</h3>
    <p>
      <label className = "currentDate"> Application Date: </label>
        <span>{date}</span>
    </p>
    <p>
      <label className = "interviewDate">Interview Date: </label>
        <span> {props.interviewDate} </span>
    </p>
    <p>
      <label className = "contactInfo">Contact Info: </label>
        <p> 
          <label className='contactEmail'> Email: </label>
          <span> {props.contactEmail} </span>
        </p>
        <p> 
          <label className='contactNumber'> Number: </label>
          <span> {props.contactNumber} </span>
        </p>
    </p>
    <p>
      <label className = "companyURL"> URL: </label>
      <span> {props.companyURL} </span>
    </p>
    <p>
      <label className = "status"> Status: </label>
      <span> {props.status} </span>
    </p>
    <div className="cardButtons">
      <button className="updateButton" onClick = {(e) => updateCard(this.props) }>Update</button>
      <button onClick = {(e) => {
        e.preventDefault();
        deleteCardEvent(props.marketId)
        }}>Delete</button>
    </div>
  </div>
  )
}

// export default Card
export default connect(null, mapDispatchToProps)(Card);