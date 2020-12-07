import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    }
  ];

  constructor(private router: Router) { }

  public redirecto(path: string): void {
    this.router.navigate([path]);
  }

}
