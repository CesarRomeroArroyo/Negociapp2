import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '@store/state/state';
import * as actions from '@store/actions/actions';

import { Mider, PhotoObject } from '@models/global/user.model';
import { User } from '@models/global/user.model';


@Injectable()
export class ProfileFacade {

  constructor(protected store: Store<State>) { }

  public updateUser(user: User, showMessage = true): void {
    this.store.dispatch(actions.updateUser({ user, showMessage }))
  }

  public updateUserPhoto(user: User): void {
    this.store.dispatch(actions.updateUserPhoto({ user }))
  }


}