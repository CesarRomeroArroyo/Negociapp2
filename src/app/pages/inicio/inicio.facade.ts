import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { State } from '@store/state/state';
import * as actions from '@store/actions/actions';

import { Categories } from '@models/data-base/categorires';


@Injectable()
export class InicioFacade {

  constructor(protected store: Store<State>) { }

  public getCategories$: Observable<Categories> = this.store.select('categories');

  public fetchCategories(): void {
    this.store.dispatch(actions.fetchCategories())
  }

}