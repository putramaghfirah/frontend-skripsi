import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.user || initialState;

export const selectUser = createSelector([selectSlice], state => state.user);
export const selectFullName = createSelector(
  [selectSlice],
  state => state.user?.full_name,
);
export const selectRole = createSelector(
  [selectSlice],
  state => state.user?.roles,
);
