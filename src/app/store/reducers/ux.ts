import { Action, createReducer, on } from '@ngrx/store';
import { User } from '@models/global/user.model';

import * as actions from '@store/actions/actions'

export const initialState: boolean = false;

const featureReducer = createReducer(
  initialState,
);

export const uxReducer = (state: boolean, action: Action): boolean => {
  return featureReducer(state, action);
};