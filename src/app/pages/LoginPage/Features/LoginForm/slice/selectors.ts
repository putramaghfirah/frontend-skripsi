import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.loginForm || initialState;

export const selectLoginForm = createSelector([selectSlice], state => state);
export const selectEmail = createSelector([selectSlice], state => state.email);
export const selectPassword = createSelector(
  [selectSlice],
  state => state.password,
);
