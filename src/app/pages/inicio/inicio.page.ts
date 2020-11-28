import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage  implements OnInit{
  user: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('NEGOCIAPP_USER'));
  }

  public redirecTo(category): void {
    this.router.navigate([`category/${category}`]);
  }
}
