import * as types from '../constants/actionTypes';

// export const ADD_CARD = "ADD_CARD";
// export const DELETE_CARD = "DELETE_CARD";
// export const UPDATE_STATUS = "UPDATE_STATUS";
// export const UPDATE_NOTE = "ADD_NOTE";
// export const UPDATE_CARD = "UPDATE_CARD";
// export const ARCHIVE_CARD = "STORED_CARD";

// add card action
export const addCardAction = (cardId) => ({
  type: types.ADD_CARD,
  payload: cardId,
});

// delete card action
export const deleteCardAction = (cardId) => ({
  type: types.DELETE_CARD,
  payload: cardId,
});

// update status action
export const updateStatusAction = (status) => ({
  type: types.UPDATE_STATUS,
  payload: status,
});

// add note action
export const updateNoteAction = (note) => ({
  type: types.UPDATE_NOTE,
  payload: note,
});

// update card
export const updateCardAction = (updateObject) => ({
  type: types.UPDATE_CARD,
  payload: updateObject,
});

// store card
export const populateColumns = (populateColumns) => ({
  type: types.POPULATE_COLUMNS,
  payload: populateColumns,
});


export const activeUser = (activeUser) => ({
    type: types.ACTIVE_USER,
    payload: activeUser,
});

export const displayJobModal = (jobModal) => ({
  type: types.DISPLAY_JOB_MODAL,
  payload: jobModal,
})

export const displayUpdateModal = (updateModal) => ({
  type: types.DISPLAY_UPDATE_MODAL,
  payload: updateModal,
})

export const editCard = (cardData) => ({
  type: types.EDIT_CARD,
  payload: cardData,
})