import { Input } from '@angular/core';

import { CategoryPath, CategoryURL } from 'src/app/models/category.model';
import { CollectionsBd, imgStorage } from 'src/app/models/form.model';
import { User } from 'src/app/models/user.model';

export abstract class FormsAbstract {

  public user: User = JSON.parse(localStorage.getItem('NEGOCIAPP_USER'));
  public timeForArray: string[] = ['Horas', 'Dias', 'Meses'];
  public invalid = false;

  @Input() public category: string;

  get service(): string {
    return CategoryURL.Service;
  }

  get rent(): string {
    return CategoryURL.Rent;
  }

  get shop(): string {
    return CategoryURL.Shop;
  }

  get collectionDataBD(): string {
    return this.category === CategoryURL.Service ? CollectionsBd.Service :
      this.category === CategoryURL.Rent ? CollectionsBd.Rent :
        this.category === CategoryURL.Shop ? CollectionsBd.Shop : null;
  }

  get secondMessageHeader(): string {
    switch (this.category) {
      case CategoryURL.Service:
        return CategoryPath.Service;
      case CategoryURL.Rent:
        return CategoryPath.Rent;
      case CategoryURL.Shop:
        return CategoryPath.Shop;
    }
  }

  get imgDefault(): string {
    return imgStorage.Default;
  }

  get imgDefaultDetail(): string {
    return imgStorage.DefaulDetail;
  }

  get imgDeal(): string {
    return imgStorage.Deal;
  }

  get iconDeal(): string {
    return imgStorage.iconDeal;
  }

}