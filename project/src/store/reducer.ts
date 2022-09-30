import { createReducer } from '@reduxjs/toolkit';
import { Departments } from '../const';
import { PeoplesType } from '../types/people';
import { changeSortTypeAction, changeDepartamentTypeAction, loadPeopleAction } from './action';

type InitialState = {
  activeSort: string,
  departament: string,
  people: PeoplesType,
}

const initialState : InitialState = {
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
    })
    .addCase(loadPeopleAction, (state, action) => {
      state.people = action.payload;
    });
});

export {reducer};
