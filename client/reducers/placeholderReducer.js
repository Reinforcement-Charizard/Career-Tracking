import * as types from '../constants/actionTypes';

const initialState = {
  placeholderState: null,
};



const placeholderReducer = (state = initialState, action) => {
  switch (action.type) {
    // delete card
    case types.DELETE_CARD:
      // create fetch request
      fetch('http://localhost:3000/api/deleteJob')
      // returns updated card list
      return {
        ...state,
        placeholderState: newPlaceholder,
      };

    default: {
      return state;
    }
  }
};

export default placeholderReducer;