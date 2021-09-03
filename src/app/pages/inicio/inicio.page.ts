import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormsAbstract } from '@components/abstract/form.abstact';

import { CategoryURL } from '@models/category.model';
import { InicioFacade } from '@pages/inicio/inicio.facade';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage extends FormsAbstract {

  constructor(
    private router: Router,
    private inicioFacade: InicioFacade
  ) { super(); }

  async ionViewWillEnter(): Promise<void> {
    this.inicioFacade.fetchCategories();
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
