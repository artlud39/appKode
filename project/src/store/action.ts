import { createAction } from '@reduxjs/toolkit';

export const changeSortTypeAction = createAction('people/activeSortType', (sortType) => ({
  payload: sortType
}));

export const changeFilterTypeAction = createAction('people/activeFilterType', (filterType) => ({
  payload: filterType
}));
