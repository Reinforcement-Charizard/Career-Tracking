import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import updateCard from './updateCard.jsx';
import './componentStyling/card.scss';

const mapDispatchToProps = (dispatch) => ({
  // update Card
  deleteCardAction: (cardId) => {
    dispatch(actions.deleteCardAction(cardId));
  },
  populateColumns: (arg) => dispatch(actions.populateColumns(arg)),
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
    fetch('http://localhost:8080/api/delete', {
      method: 'DELETE',
      body: { cardId },
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        res.json();
      })
      .then((res) => {
        this.props.deleteCardAction(res.cardId);
      })
      .catch((err) => {
        console.log('error in deleteCardEvent: ', err);
      });
  };

  // event handler for updating job
  // /api/updateJob
  // this needs to go elsewhere on the popup page for the update card

  // {props.title}
  // {props.companyName}
  return (
    <div className="cardBox">
      {/* <h2 className="title">Software Engineer 2</h2>
      <h3 className="companyName">Google</h3> */}
      <h2 className="title">{props.title}</h2>
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
          {/* <span> {props.contactEmail} </span> */}
        </p>
        <p>
          <label className="contactNumber"> Number: </label>
          {/* <span> {props.contactNumber} </span> */}
        </p>
      </p>
      <p>
        <label className="companyURL"> URL: </label>
        <span> {props.companyURL} </span>
      </p>
      <p>
        <label className="status"> Status: </label>
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
        <textarea className="notesArea" rows="5" cols="36" placeholder="Notes" />
      </div>
      <div className="cardButtons">
        <button
          className="updateButton"
          onClick={(e) => {
            e.preventDefault();
            window.location.assign('http://localhost:8080/home/api/updateJob');
          }}
        >
          Update
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            deleteCardEvent(props.cardId);
          }}
        >
          Delete
        </button>
        <button onClick={handleDummyData}>Test</button>
      </div>
    </div>
  );
}

// export default Card
export default connect(null, mapDispatchToProps)(Card);
