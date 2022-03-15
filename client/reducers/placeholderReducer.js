import * as types from '../constants/actionTypes';

const initialState = {
  placeholderState: null,
};



const placeholderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CARD:
      let newPlaceholder = true;
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