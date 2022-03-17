import * as types from '../constants/actionTypes';

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

// adds node to the end of the linkedList
LinkedList.prototype.add = function (val) {
  const newNode = new ListNode(val);
  // check if this node is the first node in linkedlist
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
    return;
  }
  this.tail.next = newNode;
  newNode.prev = this.tail;
  this.tail = newNode;
};

LinkedList.prototype.edit = function (val) {
  let currNode = this.head;
  while(currNode){
    if (currNode.val[val[0].card_id]){
      currNode.val = val[0];
      return;
    }
    currNode = currNode.next;
  }
}

// removes first instance of the passed in value from linkedList
LinkedList.prototype.remove = function (val) {
  // set current to this.head
  let currNode = this.head;
  // check if val is the head
  console.log(val)
  if (this.head.val[val]) {
    console.log('deleting head')
    if (currNode.next){
      this.head = currNode.next;
      this.head.prev = null;
    } else {
      this.head = null;
    }
    return;
  }

  while (currNode) {
    console.log(currNode[val])
    if (currNode.val[val]) {
      if (currNode.next === null) {
        this.tail = currNode.prev;
        this.tail.next = null;
        currNode.prev = null;
        return;
      }
      currNode.next.prev = currNode.prev;
      currNode.prev.next = currNode.next;
      return;
    }
    currNode = currNode.next;
  }
};

const initialState = {
  activeUser: null,
  user_id: null,
  interested: new LinkedList(),
  applied: new LinkedList(),
  interviewOne: new LinkedList(),
  interviewTwo: new LinkedList(),
  offered: new LinkedList(),
  jobModal: false,
  updateCardModal: false,
};

/*

  cards stored on each stateful key like so:
 { id: {title: string, company: string, etc...}, ... }

*/

const placeholderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POPULATE_COLUMNS:
      console.log('this is the action payload in populate columns: ', action.payload);
      const updatedState = { ...state };
      for (let i = 0; i < action.payload.length; i++) {
        const addedCard = {};
        addedCard[action.payload[i].card_id] = action.payload[i];
        console.log('adding card')
        console.log(addedCard)
        updatedState[action.payload[i].status].add(addedCard);
      }
      console.log('this is the updatedState: ', updatedState);
      return {
        ...updatedState,
      };

    case types.DELETE_CARD:
      const newState = {...state}
      const column = action.payload[0].status;
      const list = newState[column];
      list.remove(action.payload[0]._id);
      return {
        ...state,
        column: list
      };
    case types.EDIT_CARD:
      const newStateEdit = {...state}
      const columnEdit = action.payload[0].status;
      const listEdit = newState[column];
      list.edit(action.payload);
      return {
        ...state
      };
    case types.ACTIVE_USER:
      return {
        ...state,
        activeUser: action.payload.username,
        user_id: action.payload.id,
      };
    case types.MOVE_CARD:
      // delete from previous column

      // add to new column

      return {
        ...state,
      };
    case types.DISPLAY_JOB_MODAL:

      return {
        ...state,
        jobModal: action.payload,
      };
      case types.DISPLAY_UPDATE_MODAL:

      return {
        ...state,
        updateCardModal: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default placeholderReducer;

/*

need an action that updates the activeUser

*/
