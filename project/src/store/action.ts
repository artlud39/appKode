import { createAction } from '@reduxjs/toolkit';

export const changeSortTypeAction = createAction('people/activeSortType', (sortType) => ({
  payload: sortType
}));

export const changeDepartamentTypeAction = createAction('people/activeDepartamentType', (filterType) => ({
  payload: filterType
}));
