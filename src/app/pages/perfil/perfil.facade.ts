import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '@store/state/state';
import * as actions from '@store/actions/actions';

import { Mider } from '@models/global/user.model';
import { User } from '@models/global/user.model';


@Injectable()
export class ProfileFacade {

  constructor(protected store: Store<State>) { }

  public updateUser(user: User): void {
    this.store.dispatch(actions.updateUser({ user }))
  }


}