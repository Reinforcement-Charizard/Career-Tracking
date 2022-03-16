import React from 'react';
import Card from './Card.jsx';
import './componentStyling/cardsDisplay.scss';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  state: { ...state },
});

function CardsDisplay(props) {
  // drag and drop here ????

  // linkedlist thing
  // loop and create new cards and push in columns
  // destructure column from props.state
  const { applied, interested, interviewOne, interviewTwo, offered } = props.state.placeholder;

  // applied
  const appliedCol = traverseLinkedList(applied);
  const appliedColMap = colArrayMap(appliedCol);
  // interested
  const interestedCol = traverseLinkedList(interested);
  const interestedColMap = colArrayMap(interestedCol);
  // interviewOne
  const interviewOneCol = traverseLinkedList(interviewOne);
  const interviewOneColMap = colArrayMap(interviewOneCol);
  // interviewTwo
  const interviewTwoCol = traverseLinkedList(interviewTwo);
  const interviewTwoColMap = colArrayMap(interviewTwoCol);
  // offered
  const offeredCol = traverseLinkedList(offered);
  const offeredColMap = colArrayMap(offeredCol);

  // return 5 columns
  return (
    <div className="MainContainer">
      <div className="row">
        <div className="column">{interestedColMap}</div>
        <div className="column">{appliedColMap}</div>
        <div className="column">{interviewOneColMap}</div>
        <div className="column">{interviewTwoColMap}</div>
        <div className="column">{offeredColMap}</div>
      </div>
    </div>
  );
}

// create function to populate columns as an array
function traverseLinkedList(linkedList) {
  // check if head node exists, if false, return empty array
  if (linkedList.head === null) return [];
  // assign currNode to this.head to start traversing linkedList
  // store each node object in an array
  const colArray = [];
  let currNode = linkedList.head;
  while (currNode) {
    colArray.push(currNode.val);
    currNode = currNode.next;
  }
  return colArray;
}

// companyName, interviewDate, status, title, _id
function colArrayMap(colArr) {
  return colArr.map((obj) => {
    const values = Object.values(obj);
    return (
      <Card
        title={values[0].title}
        companyName={values[0].companyName}
        interviewDate={values[0].interviewDate}
        status={values[0].status}
      />
    );
  });
}

export default connect(mapStateToProps, null)(CardsDisplay);
