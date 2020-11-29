import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryURL } from '../../models/category.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  user: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('NEGOCIAPP_USER'));
  }

  get service(): string {
    return CategoryURL.Service;
  }
  get rent(): string {
    return CategoryURL.Rent;
  }
  get shop(): string {
    return CategoryURL.Shop;
  }

  public redirecTo(category): void {
    this.router.navigate([`category/${category}`]);
  }
}
