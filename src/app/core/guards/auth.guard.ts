import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  async canActivate() {
    const tokenUser = JSON.parse(localStorage.getItem('NEGOCIAPP_USER'));
    if (tokenUser) {
      return true;
    }
    else {
      this.router.navigateByUrl('/login');
    }
  }
}
