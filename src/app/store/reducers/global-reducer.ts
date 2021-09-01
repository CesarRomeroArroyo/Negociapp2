import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const initialState: User = {
    active: false,
    sessionActive: false,
    city: '',
    tel: null,
    email: '',
    id: '',
    name: '',
    nameToSearch: '',
    num_ide: '',
    onesignal: '',
    prestador: false,
    rent: false,
    service: false,
    shop: false,
    tip_ide: '',
    uniqueid: '',
    lat: null,
    lng: null,
    midera: null,
    miders: null,
    miderv: null,
    rate: null,
    photoUrl: '',
    photoRef: '',
};

const featureReducer = createReducer(
  initialState,
);

export const authReducer = (state: User, action: Action): User => {
  return featureReducer(state, action);
};