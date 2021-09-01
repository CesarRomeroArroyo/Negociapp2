import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { State } from '../store/state/state';
import { User } from '@models/global/user.model';
import * as actions from '../store/actions/actions';
import { LOCALSTORAGE } from '../constans/localStorage';
import { Router } from '@angular/router';

@Injectable()
export class HomeFacade {

  constructor(
    protected store: Store<State>,
    private router: Router
  ) { }

  public registerUserNew(user: User): void {
    this.store.dispatch(actions.registerUser({ user }))
  }

  public userRelogged(user: User): void {
    this.store.dispatch(actions.userRelogged({ user }))
  }

  public userAlreadylogged(): void {
    const user = JSON.parse(localStorage.getItem(LOCALSTORAGE.USER));
    this.router.navigate(['/inicio']);
    this.store.dispatch(actions.userAlreadylogged({ user }))
  }

}