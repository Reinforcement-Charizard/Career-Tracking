import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import updateCard from './updateCard.jsx';
import './componentStyling/card.scss';

function mapStateToProps(state) {
  const { placeholder } = state;  
  return { 
    updateModal: placeholder.updateCardModal,
  }
}

const mapDispatchToProps = (dispatch) => ({
  // update Card
  deleteCardAction: (cardId) => {
    dispatch(actions.deleteCardAction(cardId));
  },
  populateColumns: (arg) => dispatch(actions.populateColumns(arg)),
  displayUpdateModal: (arg) => dispatch(actions.displayUpdateModal(arg)),
});

function Card(props) {
  const date = new Date().toLocaleDateString();

  // testing dummy data
  const handleDummyData = (event) => {
    event.preventDefault();
    // dummy data:

    // dummy data
    const testData = [
      {
        title: 'Software Engineer',
        companyName: 'Google',
        interviewDate: Date.now(),
        status: 'applied',
        _id: '1',
      },
      {
        title: 'Software Dev',
        companyName: 'Meta',
        interviewDate: Date.now(),
        status: 'applied',
        _id: '2',
      },
      {
        title: 'Software Eng',
        companyName: 'Netflix',
        interviewDate: Date.now(),
        status: 'interviewOne',
        _id: '3',
      },
      {
        title: 'Data Analyst',
        companyName: 'Target',
        interviewDate: Date.now(),
        status: 'interviewTwo',
        _id: '4',
      },
      {
        title: 'Software Developer',
        companyName: 'Codesmith',
        interviewDate: Date.now(),
        status: 'offered',
        _id: '5',
      },
      {
        title: 'UX Designer',
        companyName: 'Amazon',
        interviewDate: Date.now(),
        status: 'applied',
        _id: '6',
      },
      {
        title: 'UI Designer',
        companyName: 'Best Buy',
        interviewDate: Date.now(),
        status: 'offered',
        _id: '7',
      },
      {
        title: 'Software Engineer',
        companyName: 'Samsung',
        interviewDate: Date.now(),
        status: 'interested',
        _id: '8',
      },
      {
        title: 'Software Developer',
        companyName: 'Hulu',
        interviewDate: Date.now(),
        status: 'interviewTwo',
        _id: '9',
      },
      {
        title: 'Software Engineer',
        companyName: 'HBO',
        interviewDate: Date.now(),
        status: 'interviewOne',
        _id: '10',
      },
    ];

    props.populateColumns(testData);
  };
  // event handler for deleting card
  //
  const deleteCardEvent = (cardId) => {
    // build structure of request
    // await response
    console.log(cardId)
    const reqBody = {card_id: cardId}
    fetch(`http://localhost:3000/api/${cardId}`, {
      method: 'DELETE',
      credentials: 'include',
    })
    .then((data) => data.json())
    .then((res) => {
        console.log('delete response is:')
        console.log(res.data)
        props.deleteCardAction(res.data);
      })
      .catch((err) => {
        console.log('error in deleteCardEvent: ', err);
      });
  };

  function handleUpdateModal(event) {
    event.preventDefault();
    if (!props.updateModal) {
      props.displayUpdateModal(true);
    } else {
      props.displayUpdateModal(false);
    }
  }

  // event handler for updating job
  // /api/updateJob
  // this needs to go elsewhere on the popup page for the update card

  // {props.title}
  // {props.companyName}
  return (
    <div className="cardBox">
      {/* <h2 className="title">Software Engineer 2</h2>
      <h3 className="companyName">Google</h3> */}
      <div className="titleDiv">
        <h2 className="title">{props.title}</h2>
      </div>
      <h3 className="companyName">{props.companyName}</h3>
      <p>
        <label className="currentDate"> Application Date: </label>
        <span>{props.applicationDate}</span>
      </p>
      <p>
        <label className="interviewDate">Interview Date: </label>
        <span> {props.interviewDate} </span>
      </p>
      <p>
        <label className="contactInfo">Contact Info: </label>
        <p>
          <label className="contactEmail"> Email: </label>
          <span> {props.contactEmail} </span>
        </p>
        <p>
          <label className="contactNumber"> Number: </label>
          <span> {props.contactNumber} </span>
        </p>
      </p>
      <p>
        <label className="companyURL"> URL: </label>
        <span> {props.companyURL} </span>
      </p>
      <p>
        <label className="status"> Status: </label>
        <span> {props.status} </span>
      </p>
      <div className="notesDiv">
        <p id="notesLabel">Notes</p>
        <textarea className="notesArea" rows="5" cols="36" defaultValue={props.notes} />
      </div>
      <div className="cardButtons">
        {/* <button
          className="updateButton"
          onClick={(e) => {
            e.preventDefault();
            window.location.assign('http://localhost:8080/home/api/updateJob');
          }}
        > */}
        <button className="updateButton" onClick={handleUpdateModal}>Update</button>
        {props.updateModal ? <UpdateCard /> : null}
        <button
        className="updateButton"
          onClick={(e) => {
            e.preventDefault();
            deleteCardEvent(props.cardId);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

// export default Card
export default connect(mapStateToProps, mapDispatchToProps)(Card);
