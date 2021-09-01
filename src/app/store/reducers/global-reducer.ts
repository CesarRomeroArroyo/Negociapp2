import { Action, createReducer, on } from '@ngrx/store';
import { User } from '@models/global/user.model';

import * as actions from '@store/actions/actions'

export const initialState: User = { };

const featureReducer = createReducer(
  initialState,
  on(actions.registerUser, (state, { user }) => {
    return { ...user }
  }),
  on(actions.userRelogged, (state, { user }) => {
    return { ...user, sessionActive: true }
  }),
  on(actions.userAlreadylogged, (state, { user }) => {
    return { ...user, sessionActive: true }
  })
);

export const authReducer = (state: User, action: Action): User => {
  return featureReducer(state, action);
};