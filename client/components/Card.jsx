import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import updateCard  from './updateCard.jsx'
import './componentStyling/card.scss'

const mapDispatchToProps = dispatch => ({
  // update Card
  deleteCardAction: (cardId) => {
    dispatch(actions.deleteCardAction(cardId))
  }
})

const Card = props => {

// event handler for deleting card
  // 
const deleteCardEvent = (cardId) => {
  // build structure of request
  // await response
  fetch('http://localhost:8080/api/delete', {
    method: 'DELETE',
    body: { cardId: cardId },
    headers: { 'Content-Type': 'application/json'}
  })
    .then((res) => {res.json()})
    .then((res) => {this.props.deleteCardAction(res.cardId)})
    .catch((err) => {console.log('error in deleteCardEvent: ', err)})
};

// event handler for updating job
  // /api/updateJob
  // this needs to go elsewhere on the popup page for the update card

  // {props.title}
  // {props.companyName}
  return (
  <div className="cardBox">
    <h2 className = "title">Software Engineer 2</h2>
    <h3 className = "companyName">Google</h3>
    <p>
      <label className = "currentDate"> Application Date: </label>
        <span>{props.applicationDate}</span>
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
      <span> 
          <select className="selectClass">
              <option value="interested">Interested</option>
              <option value="applied">Applied</option>
              <option value="interviewOne">Interview #1</option>
              <option value="interviewTwo">Interview #2</option>
              <option value="offered">Offered</option>
            </select>
      </span>
    </p>
    <div className="notesDiv">
            <p id="notesLabel">Notes</p>
            <textarea  className="notesArea" rows="5" cols="36" placeholder='Notes' />
          </div>
    <div className="cardButtons">
      <button className="updateButton" onClick = {(e) => {
        e.preventDefault();
        window.location.assign('http://localhost:8080/home/api/updateJob')
        }}>Update</button>
      <button onClick = {(e) => {
        e.preventDefault();
        deleteCardEvent(props.cardId)
        }}>Delete</button>
    </div>
  </div>
  )
}

// export default Card
export default connect(null, mapDispatchToProps)(Card);