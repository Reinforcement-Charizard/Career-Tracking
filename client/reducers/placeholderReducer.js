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

const initialState = {
  activeUser: null,
  jobs: [],
  interested: new LinkedList(),
  applied: new LinkedList(),
  interviewOne: new LinkedList(),
  interviewTwo: new LinkedList(),
  offered: new LinkedList(),
};

/*

  cards stored on each stateful key like so:
 { id: {title: string, company: string, etc...}, ... }

*/

const placeholderReducer = (state = initialState, action) => {
  switch (action.type) {
<<<<<<< HEAD
    case types.POPULATE_COLUMNS:
      // call a function that parses thru the response from the server
      // expect to get [ {job data from database} ]
      // iterate through the server response that contains jobs
      // for each index in that response array
      //  check the object's 'status' key
      //  add that object to the appropriate state object based on the status key
      // return the update state
      return {
        ...state,
      };

    case types.DELETE_CARD:
      // delete action.payload.<columnName>.<id>
      return {
        ...state,
      };

    case types.MOVE_CARD:
      // delete from previous column

      // add to new column

=======
    // delete card
    case types.DELETE_CARD:
      // create fetch request
      fetch('http://localhost:3000/api/deleteJob')
      // returns updated card list
>>>>>>> 18358dfc8615e10849baa69b5198623c076d2544
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
