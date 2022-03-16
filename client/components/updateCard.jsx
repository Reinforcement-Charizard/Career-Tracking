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
console.log('inside updateCard')

const updateCardEvent = (props) => {
  // build structure of request

  // await response
  fetch('https://localhost:8080/api/updateJob')
    .then((res) => {res.json();})
    .then((res) => {this.props.updateCardAction(res.locals)})
    .catch((err) => {console.log('error in updateCardEvent: ', err)})
};


return (
<div className="updateCard">
  <div> UPDATE CARD </div> 
  <label>Title: </label>
    <span>
      <input placeholder= 'SWE2' type="text"/>  
    </span>
  <label> Company: </label>
    <span> 
      <input placeholder= 'Google' type="text"/>
    </span> 
    <p>
      <label className = "currentDate"> Application Date: </label>
        <span>
            <input placeholder={props.date} type="text"/>
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
            <input placeholder={props.contactEmail} />
          </span>
          <label className='contactNumber'> Number: </label>
          <span> 
              <input placeholder={props.contactNumber} />
          </span>
        </p>
    <p>
      <label className = "companyURL"> URL: </label>
      <span> 
          <input placeholder={props.companyURL} />
      </span>
    </p>
    <p>
      <label className = "status"> Status: </label>
      <span> 
          <input placeholder={props.status} />
      </span>
    </p>
    <div className="updateCardButtons">
      <button className="updateCardSubmit" onClick = {(e) => {
        e.preventDefault();
        updateCardEvent(props);
      }}>Submit</button>
      <button onClick= {(e)=>{window.location='http://localhost:8080/home'}}>Cancel</button>
    </div>
</div>
);
};

export default connect(null, mapDispatchToProps)(updateCard)