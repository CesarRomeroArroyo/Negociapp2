import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsAbstract } from 'src/app/components/abstract/form.abstact';

import { CategoryURL } from '../../models/category.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage extends FormsAbstract {

  constructor(private router: Router) { super(); }

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
