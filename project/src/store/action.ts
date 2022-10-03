import { createAction } from '@reduxjs/toolkit';
import { PeoplesType } from '../types/people';

export const changeSortTypeAction = createAction('people/activeSortType', (sortType) => ({
  payload: sortType
}));

export const changeDepartamentTypeAction = createAction('people/activeDepartamentType', (filterType) => ({
  payload: filterType
}));

export const loadPeopleAction = createAction<PeoplesType>('data/loadPeople');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
