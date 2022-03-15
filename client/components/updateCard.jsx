import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import './componentStyling/updateCard.scss'

const updateCard = (props) => {
//recreate card but everything's an input field
const mapDispatchToProps = (dispatch) => ({
    updateCardAction: (updateObject) => {
        dispatch(actions.updateCardAction(updateObject))
      },
});

//server call to updateCard


return (
    <div class="updateCard">
    <input placeholder={this.props.title} type="text"/>  
    <input placeholder={this.props.companyName} type="text"/> 
    <p>
      <label className = "currentDate"> Application Date: </label>
        <span>
            <input placeholder={this.props.date} type="text"/>
        </span>
    </p>      
    <p>
      <label className = "interviewDate">Interview Date: </label>
        <span> 
            <input placeholder={this.props.interviewDate}/> 
        </span>
    </p>
    <p>
      <label className = "contactInfo">Contact Info: </label>
        <p> 
          <label className='contactEmail'> Email: </label>
          <span> 
            <label placeholder={this.props.contactEmail} />
          </span>
        </p>
        <p> 
          <label className='contactNumber'> Number: </label>
          <span> 
              <input placeholder={this.props.contactNumber} />
          </span>
        </p>
    </p>
    <p>
      <label className = "companyURL"> URL: </label>
      <span> 
          <input placeholder={this.props.companyURL} />
      </span>
    </p>
    <p>
      <label className = "status"> Status: </label>
      <span> 
          <input placeholder={this.props.status} />
      </span>
    </p>
    <button>Submit</button>
    <button>Cancel</button>
    </div>
);
};

export default connect(null, mapDispatchToProps(updateCard))

// const updateCardEvent = (props) => {
//     fetch('http://localhost:8080/api/updateJob')
//       .then(() => {console.log('updating job')})
//       .then((res) => {this.props.updateCardAction(res.body)})
//       .catch((err) => {console.log('error in updateCardEvent: ', err)})
//   };

{/* <div className="cardBox">
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
      <button className="updateButton" onClick = {(e) => console.log('updating')}>Update</button>
      <button onClick = {(e) => {
        e.preventDefault();
        deleteCardEvent(props.marketId)
        }}>Delete</button>
    </div>
  </div> */}