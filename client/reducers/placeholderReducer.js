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

//adds node to the end of the linkedList
LinkedList.prototype.add = function(val) {
  const newNode = new ListNode(val);
  //check if this node is the first node in linkedlist
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
    return;
  }
  this.tail.next = newNode;
  newNode.prev = this.tail;
  this.tail = newNode;
}

//removes first instance of the passed in value from linkedList
LinkedList.prototype.remove = function(val) {
  //set current to this.head
  let currNode = this.head;
  //check if val is the head
  if (this.head.val.hasOwnProperty(val)) {
    this.head = currNode.next;
    this.head.prev = null;
    return;
  }

  while (currNode) {
    if (currNode.val.hasOwnProperty(val)) {
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
  interested: new LinkedList(),
  applied: new LinkedList(),
  interviewOne: new LinkedList(),
  interviewTwo: new LinkedList(),
  offered: new LinkedList(),
};

//dummy data
const testData = [
  {
    title: 'Software Engineer',
    companyName: 'Google',
    interviewDate: Date.now(),
    status: 'applied',
    cardId: '1',
  },
  {
    title: 'Software Dev',
    companyName: 'Meta',
    interviewDate: Date.now(),
    status: 'applied',
    cardId: '2',
  },
  {
    title: 'Software Eng',
    companyName: 'Netflix',
    interviewDate: Date.now(),
    status: 'interviewOne',
    cardId: '3',
  },
  {
    title: 'Data Analyst',
    companyName: 'Target',
    interviewDate: Date.now(),
    status: 'interviewTwo',
    cardId: '4',
  },
  {
    title: 'Software Developer',
    companyName: 'Codesmith',
    interviewDate: Date.now(),
    status: 'offered',
    cardId: '5',
  },
  {
    title: 'UX Designer',
    companyName: 'Amazon',
    interviewDate: Date.now(),
    status: 'applied',
    cardId: '6',
  },
  {
    title: 'UI Designer',
    companyName: 'Best Buy',
    interviewDate: Date.now(),
    status: 'offered',
    cardId: '7',
  },
  {
    title: 'Software Engineer',
    companyName: 'Samsung',
    interviewDate: Date.now(),
    status: 'applied',
    cardId: '8',
  },
  {
    title: 'Software Developer',
    companyName: 'Hulu',
    interviewDate: Date.now(),
    status: 'interviewTwo',
    cardId: '9',
  },
  {
    title: 'Software Engineer',
    companyName: 'HBO',
    interviewDate: Date.now(),
    status: 'interviewOne',
    cardId: '10',
  },
]

/*

  cards stored on each stateful key like so:
 { id: {title: string, company: string, etc...}, ... }

*/

const placeholderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POPULATE_COLUMNS:
      const updatedState = {...state};
      for (let i = 0; i < action.payload.length; i++){
        const addedCard = {};
        addedCard[action.payload[i]._id] = action.payload[i];
        updatedState[action.payload[i].status].add(addedCard);
      }

      return {
        updatedState,
      };

    case types.DELETE_CARD:
      const column = {...state[action.payload[0].status]};
      column.remove(action.payload[0]._id);

      return {
        ...state,
        column
      };
    case types.ACTIVE_USER:
      return {
        ...state,
        activeUser: action.payload[0].username,
      };
    case types.MOVE_CARD:
      // delete from previous column

      // add to new column

      return {
        ...state,
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
