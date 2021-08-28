import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LOCALSTORAGE } from '../../constans/localStorage';
import { FirebaseService } from '../../core/services/firebase.service';
import { User } from 'src/app/models/user.model';
import { FormsAbstract } from '../abstract/form.abstact';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  public appPages = [
    {
      title: 'Mis datos',
      url: '/perfil',
      icon: 'person-circle',
    },
    {
      title: 'Configuracion MIDER',
      url: '/mider',
      icon: 'settings',
    },
    {
      title: 'Salir',
      url: '/home',
      icon: 'log-out',
    }
  ];

  constructor(
    private router: Router,
    private firebaseService: FirebaseService
  ) { }

  public redirecto(path: string): void {
    if (path === '/home') {
      const user = JSON.parse(localStorage.getItem(LOCALSTORAGE.USER));
      user.sessionActive = false;
      this.firebaseService.actualizarDatos('usuario-app', user, user.id).then(() => {
        localStorage.clear();
        this.router.navigate([path]);
      });
    } else {
      this.router.navigate([path]);
    }
  }

}
