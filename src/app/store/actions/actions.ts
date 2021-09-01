import { createAction, props } from '@ngrx/store';

import { User } from '@models/global/user.model';

export const registerUser = createAction(
    '[Register User Page] Register User',
    props<{ user: User }>()
);
export const registerUserSuccess = createAction(
    '[Register User Success Page] Register User Success'
);
export const registerUserFailure = createAction(
    '[Register User Success Page] Register User Success',
    props<{ error: Error }>()
);
export const userRelogged = createAction(
    '[User Relogged Page] User Relogged',
    props<{ user: User }>()
);
export const userReloggedSuccess = createAction(
    '[User Relogged Success Page] User Relogged Success'
);
export const userAlreadylogged = createAction(
    '[User Already logged Page] User Already logged',
    props<{ user: User }>()
);