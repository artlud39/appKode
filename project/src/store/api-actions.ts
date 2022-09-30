import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { PeoplesType } from '../types/people';
import { AppDispatch, State } from '../types/state';
import { loadPeopleAction } from './action';

enum APIRoute {
  Users = '/users?__example=all'
}

export const fetchPeopleAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPeople',
  async (_args, {dispatch, extra: api}) => {
    const {data} = await api.get<PeoplesType>(APIRoute.Users);
    dispatch(loadPeopleAction(data));
  }
);
