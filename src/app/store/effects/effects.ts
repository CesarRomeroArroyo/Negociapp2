import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, switchMap, tap, flatMap } from 'rxjs/operators';
import { of, zip, forkJoin, merge, concat } from 'rxjs';
import { Router } from '@angular/router';

import * as actions from '@store/actions/actions';
import { FirebaseService } from '@core/services/firebase.service';
import { COLLECTIONS_BD } from '@models/data-base/bd.models';
import { SelectType } from '@models/home/select-type';
import Swal from 'sweetalert2';

@Injectable()
export class AuthenticationEffects {

  // User
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
          })
        )
      )
    )
  );

  // Categories
  fetchCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.fetchCategories),
      flatMap(() => {
        const categoriesServices$ = this.firebase.obtener(COLLECTIONS_BD.CATEGORIES_SEVICES);
        const categoriesRent$ = this.firebase.obtener(COLLECTIONS_BD.CATEGORIES_RENT);
        const categoriesShop$ = this.firebase.obtener(COLLECTIONS_BD.CATEGORIES_SHOP);
        return zip(categoriesServices$, categoriesRent$, categoriesShop$);
      }),
      map(([services, rents, shops]) => {
        const servicesData = services.map((service: SelectType) => {
          return {
            name: service.name,
            value: service.value
          }
        });
        const rentData = rents.map((rent: SelectType) => {
          return {
            name: rent.name,
            value: rent.value
          }
        });
        const shopData = shops.map((shop: SelectType) => {
          return {
            name: shop.name,
            value: shop.value
          }
        });
        return actions.fetchCategoriesSuccess({
          categoriesServices: servicesData,
          categoriesRent: rentData,
          categoriesShop: shopData
        });
      }),
      catchError(error => of(actions.fetchCategoriesFailure()))
    )
  );

  // All Mider
  updatedMiderService$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.updateMiders),
      switchMap(({ user }) => {
        return of(this.firebase.actualizarDatos('usuario-app', user, user.id)).pipe(
          map(() => {
            Swal.fire('Bien Hecho', 'Datos actualizados correctamente', 'success');
            return actions.updateMidersSuccess();
          }),
          catchError(error => {
            Swal.fire('Algo ha salido mal', '', 'warning');
            return of(actions.updateMidersFailure());
          })
        )
      })
    ));

  updatedMiderShop$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.updateMiderv),
      switchMap(({ user }) => {
        return of(this.firebase.actualizarDatos('usuario-app', user, user.id)).pipe(
          map(() => {
            Swal.fire('Bien Hecho', 'Datos actualizados correctamente', 'success');
            return actions.updateMidervSuccess();
          }),
          catchError(error => {
            Swal.fire('Algo ha salido mal', '', 'warning');
            return of(actions.updateMidervFailure());
          })
        )
      })
    ));

  updatedMiderRent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.updateMidera),
      switchMap(({ user }) => {
        return of(this.firebase.actualizarDatos('usuario-app', user, user.id)).pipe(
          map(() => {
            Swal.fire('Bien Hecho', 'Datos actualizados correctamente', 'success');
            return actions.updateMideraSuccess();
          }),
          catchError(error => {
            Swal.fire('Algo ha salido mal', '', 'warning');
            return of(actions.updateMideraFailure());
          })
        )
      })
    ));

    // UPDATE USER
    updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.updateUser),
      switchMap(({ user, showMessage }) => {
        return of(this.firebase.actualizarDatos('usuario-app', user, user.id)).pipe(
          map(() => {
            if (showMessage) {
              Swal.fire('Bien Hecho', 'Datos actualizados correctamente', 'success');
            }
            return actions.updateUserSuccess();
          }),
          catchError(error => {
            Swal.fire('Algo ha salido mal', '', 'warning');
            return of(actions.updateUserFailure());
          })
        )
      })
    ));

    // UPDATE USER
    updateUserPhoto$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.updateUserPhoto),
      switchMap(({ user }) => {
        return of(this.firebase.actualizarDatos('usuario-app', user, user.id)).pipe(
          map(() => {
            Swal.fire('Bien Hecho', 'Datos actualizados correctamente', 'success');
            return actions.updateUserPhotoSuccess();
          }),
          catchError(error => {
            Swal.fire('Algo ha salido mal', '', 'warning');
            return of(actions.updateUserPhotoFailure());
          })
        )
      })
    ));

  constructor(
    private actions$: Actions,
    private firebase: FirebaseService,
    private router: Router
  ) { }
}