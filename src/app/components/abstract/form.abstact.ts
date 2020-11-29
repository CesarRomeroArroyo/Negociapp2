import { Input } from '@angular/core';

import { CategoryURL } from 'src/app/models/category.model';
import { CollectionsBd, imgStorage } from 'src/app/models/form.model';
import { User } from 'src/app/models/user.model';

export abstract class FormsAbstract {

  @Input() public category: string;
  public timeForArray: string[] = [
    'Horas',
    'Dias',
    'Meses'
  ];
  public invalid = false;
  public user: User = JSON.parse(localStorage.getItem('NEGOCIAPP_USER'));

  get service(): string {
    return CategoryURL.Service;
  }

  get rent(): string {
    return CategoryURL.Rent;
  }

  get shop(): string {
    return CategoryURL.Shop;
  }

  get saveFormDataCollection(): string {
    return this.category === CategoryURL.Service ? CollectionsBd.Service :
      this.category === CategoryURL.Rent ? CollectionsBd.Rent :
        this.category === CategoryURL.Shop ? CollectionsBd.Shop : null;
  }

  get imgDefault(): string {
    return imgStorage.Default;
  }

}