import { createReducer } from '@reduxjs/toolkit';
import { changeSortTypeAction, changeFilterTypeAction } from './action';


const initialState = {
  activeSort: '',
  activeFilter: '',
  people: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSortTypeAction, (state, action) => {
      state.activeSort = action.payload;
    })
    .addCase(changeFilterTypeAction, (state, action) => {
      state.activeFilter = action.payload;
    });
});

export {reducer};
