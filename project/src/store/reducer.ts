import { createReducer } from '@reduxjs/toolkit';
import { Departments } from '../const';
import { changeSortTypeAction, changeDepartamentTypeAction } from './action';


const initialState = {
  activeSort: '',
  departament: Departments.All,
  people: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSortTypeAction, (state, action) => {
      state.activeSort = action.payload;
    })
    .addCase(changeDepartamentTypeAction, (state, action) => {
      state.departament = action.payload;
    });
});

export {reducer};
