import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import './componentStyling/updateCard.scss'

const mapDispatchToProps = dispatch => ({
    updateCardAction: (updateObject) => {
        dispatch(actions.updateCardAction(updateObject))
        },
}); 




const updateCard = (props) => {
//recreate card but everything's an input field
// console.log('inside updateCard')

const updateCardEvent = () => {
  // build structure of request
  const reqBody = {
    user_id: props.user_id,
    title: document.getElementById('title').innerText,
    company: document.getElementById('company').innerText,
    date: document.getElementByClassName('date').innerText,
    notes: document.getElementByClassName(notesArea).innerText,
    contact_email: document.getElementById('email').innerText,
    contact_phone: document.getElementById('number').innerText,
    url: document.getElementById('url').innerText,
    status: document.getElementsByClassName('selectClass').innerText,
  }

  // await response
  fetch('https://localhost:8080/api', {
    method: 'PATCH',
    body: reqBody,
    headers: { 'Content-Type': 'application/json'}
  })
    .then((res) => {res.json();})
    .then((res) => {this.props.updateCardAction(res)})
    .catch((err) => {console.log('error in updateCardEvent: ', err)})
};


return (
<div className="updateCard">
  <div className="updateCardDiv"> UPDATE CARD </div> 
  <p></p>
  <label className="updateTitle">Title: </label>
    <span>
      <input id='title' placeholder= 'SWE2' type="text"/>  
    </span>
  <p></p>
  <label className='updateCompany'> Company: </label>
    <span> 
      <input id='company' placeholder= 'Google' type="text"/>
    </span> 
    <p>
      <label className = "currentDate"> Application Date: </label>
        <span>
            <input id='date' placeholder={props.date} type="text"/>
        </span>
    </p>      
    <p>
      <label className = "interviewDate">Interview Date: </label>
        <span> 
            <input placeholder={props.interviewDate}/> 
        </span>
    </p>
      <label className = "contactInfo">Contact Info: </label>
        <p>
          <label className='contactEmail'> Email: </label>
          <span> 
            <input id='email' placeholder={props.contactEmail} />
          </span>
        </p>
        <p>
          <label className='contactNumber'> Number: </label>
          <span> 
              <input id='number' placeholder={props.contactNumber} />
          </span>
        </p>
    <p>
      <label className = "companyURL"> URL: </label>
      <span> 
          <input id='url' placeholder={props.companyURL} />
      </span>
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
            <p className="notesLabel">Notes</p>
            <textarea  className="notesArea" rows="5" cols="36" placeholder='Notes'/>
          </div>
    <div className="updateCardButtons">
      <button className="buttonStyle" onClick = {(e) => {
        e.preventDefault();
        updateCardEvent();
        document.getElementById('title').innerText = ''
        document.getElementById('company').innerText = ''
        document.getElementByClassName('date').innerText = ''
        document.getElementByClassName(notesArea).innerText = ''
        document.getElementById('email').innerText = ''
        document.getElementById('number').innerText = ''
        document.getElementById('url').innerText = ''
        document.getElementsByClassName('selectClass').innerText = ''
      }}>Submit</button>
      <button className="buttonStyle" onClick= {(e)=>{window.location.assign('http://localhost:8080/home')}}>Cancel</button>
    </div>
</div>
);
};

export default connect(null, mapDispatchToProps)(updateCard)