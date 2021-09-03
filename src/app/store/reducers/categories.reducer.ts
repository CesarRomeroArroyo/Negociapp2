
import { Action, createReducer, on } from '@ngrx/store';
import { User } from '@models/global/user.model';

import * as actions from '@store/actions/actions'

export const initialState = { };

const featureReducer = createReducer(
  initialState,
  on(actions.fetchCategoriesSuccess, (state, { categoriesServices, categoriesRent, categoriesShop }) => {
    return {
      categoriesServices,
      categoriesRent,
      categoriesShop
    }
  })
);

export const categoriesReducer = (state: User, action: Action): User => {
  return featureReducer(state, action);
};