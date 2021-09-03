import { createAction, props } from '@ngrx/store';

import { User } from '@models/global/user.model';
import { SelectType } from '@app/models/home/select-type';
import { Mider } from '@models/global/user.model';

// Actions Module home
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
// Actions Module Init
export const fetchCategories = createAction(
    '[Fetch Categories] Fetch Categories'
);
export const fetchCategoriesSuccess = createAction(
    '[Fetch Categories Success] Fetch Categories Success',
    props<{
        categoriesServices: SelectType,
        categoriesRent: SelectType,
        categoriesShop: SelectType
    }>()
);
export const fetchCategoriesFailure = createAction(
    '[Fetch Categories Failure] Fetch Categories Failure'
);
// UPADTE MIDERv
export const updateMiders = createAction(
    '[Update Miderv] Update Miders',
    props<{ miders: Mider, user: User }>()
);
export const updateMidersSuccess = createAction(
    '[Update Miders Success] Update Miders Success'
);
export const updateMidersFailure = createAction(
    '[Update Miders Failure] Update Miders Failure'
);
// UPADTE MIDERV
export const updateMiderv = createAction(
    '[Update Miderv] Update Miderv',
    props<{ miderv: Mider, user: User }>()
);
export const updateMidervSuccess = createAction(
    '[Update Miderv Success] Update Miderv Success'
);
export const updateMidervFailure = createAction(
    '[Update Miderv Failure] Update Miderv Failure'
);
// UPADTE MIDERA
export const updateMidera = createAction(
    '[Update Midera] Update Midera',
    props<{ midera: Mider, user: User }>()
);
export const updateMideraSuccess = createAction(
    '[Update Midera Success] Update Midera Success'
);
export const updateMideraFailure = createAction(
    '[Update Midera Failure] Update Midera Failure'
);