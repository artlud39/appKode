import { createReducer } from '@reduxjs/toolkit';
import {
  changeSortTypeAction,
  changeDepartamentTypeAction,
  loadPeopleAction,
  setDataLoadedStatus,
  setAllDepartamentsTypeAction,
  setSearchQueryAction,
  setErrorAction
} from './action';
import { PeoplesType } from '../types/people';
import { Departments } from '../const';

type InitialState = {
  activeSort: string,
  departament: string,
  people: PeoplesType,
  isDataLoaded: boolean,
  departaments: string[],
  query: string,
  error: number | null,
}

const initialState : InitialState = {
  activeSort: '',
  departament: Departments.All,
  people: [],
  isDataLoaded: false,
  departaments: [],
  query: '',
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSortTypeAction, (state, action) => {
      state.activeSort = action.payload;
    })
    .addCase(changeDepartamentTypeAction, (state, action) => {
      state.departament = action.payload;
    })
    .addCase(setAllDepartamentsTypeAction, (state, action) => {
      state.departaments = action.payload;
    })
    .addCase(loadPeopleAction, (state, action) => {
      state.people = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setSearchQueryAction, (state, action) => {
      state.query = action.payload;
    })
    .addCase(setErrorAction, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
