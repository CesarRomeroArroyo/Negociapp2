import { authReducer as authenticationUser } from '../reducers/global-reducer';
import { categoriesReducer as categories } from '../reducers/categories.reducer';

export const globalReducers = {
    authenticationUser,
    categories
};