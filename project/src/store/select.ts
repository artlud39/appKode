import { State } from '../types/state';

export const getPeople = (state: State) => state.people;

export const getAcvtiveSort = (state: State) => state.activeSort;

export const getActiveDepartament = (state: State) => state.departament;

export const getDepartaments = (state: State) => state.departaments;

export const getQuery = (state: State) => state.query;

export const selectError = (state: State) => state.error;

export const selectLoaded = (state: State) => state.isDataLoaded;
