import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { DataType } from '../types/people';
import { AppDispatch, State } from '../types/state';
import { getDepartaments } from '../utils/utils';
import { loadPeopleAction, setAllDepartamentsTypeAction, setDataLoadedStatus } from './action';

export const fetchPeopleAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchPeople',
  async (_args, {dispatch, extra: api}) => {
    const {data} = await api.get<DataType>('');
    dispatch(loadPeopleAction(data.items));
    dispatch(setDataLoadedStatus(true));
    dispatch(setAllDepartamentsTypeAction(getDepartaments(data.items)));
  }
);
