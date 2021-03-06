import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { User, UserState } from './types';

// import { MyProfile } from 'app/pages/types/MyProfiles';

export const initialState: UserState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')!)
    : undefined,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    deleteUser(state) {
      state.user = undefined;
    },
  },
});

export const { actions: userActions } = slice;

export const useUserSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useUserSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
