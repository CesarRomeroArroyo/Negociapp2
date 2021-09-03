import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '@store/state/state';
import * as actions from '@store/actions/actions';

import { Mider } from '@models/global/user.model';
import { User } from '@models/global/user.model';


@Injectable()
export class MiderFacade {

  constructor(protected store: Store<State>) { }

  public updateMiders(miders: Mider, user: User): void {
    this.store.dispatch(actions.updateMiders({ miders, user }))
  }

  public updateMiderv(miderv: Mider, user: User): void {
    this.store.dispatch(actions.updateMiderv({ miderv, user }))
  }

  public updateMidera(midera: Mider, user: User): void {
    this.store.dispatch(actions.updateMidera({ midera, user }))
  }

}