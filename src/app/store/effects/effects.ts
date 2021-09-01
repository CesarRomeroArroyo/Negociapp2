import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';

import * as actions from '@store/actions/actions';
import { FirebaseService } from '@core/services/firebase.service';

@Injectable()
export class AuthenticationEffects {

  registerNewUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.registerUser),
      switchMap(action =>
        of(this.firebase.save('usuario-app', action.user)).pipe(
          map((x) => {
            this.router.navigate(['/inicio']);
            return actions.registerUserSuccess();
          }),
          catchError(error => of(actions.registerUserFailure({ error })))
        )
      )
    )
  );

  userRelogged$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.userRelogged),
      switchMap(action =>
        of(this.firebase.actualizarDatos('usuario-app', action.user, action.user.id)).pipe(
          map((x) => {
            this.router.navigate(['/inicio']);
            return actions.userReloggedSuccess();
          }),
          catchError(error => of(actions.registerUserFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private firebase: FirebaseService,
    private router: Router
  ) { }
}