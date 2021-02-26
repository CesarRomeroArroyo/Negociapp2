import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsAbstract } from 'src/app/components/abstract/form.abstact';

import { CategoryPath, CategoryURL } from 'src/app/models/category.model';
import { MessageTabOne, MessageTabTwo } from '../../../models/form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage extends FormsAbstract implements OnInit {

  public tab = 1;
  public category: string;
  public showModalCategories = false;
  public showModalPhotos = false;
  public idunique: string;

  constructor(private route: ActivatedRoute) { super() }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    this.idunique = this.route.snapshot.paramMap.get('idunique');
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

  get thirdMessage(): string {
    switch (this.category) {
      case CategoryURL.Service: {
        if (this.tab === 1) return 'Solicitar Servicio';
        else return 'Mis solicitudes'
      }
      case CategoryURL.Rent: {
        if (this.tab === 1) return 'Solicitar Alquiler';
        else return 'Mis solicitudes'
      }
      case CategoryURL.Shop: {
        if (this.tab === 1) return 'Solicitar Producto';
        else return 'Mis solicitudes'
      }
    }
  }

  get back(): string {
    return this.idunique ? '' : `category/${this.category}`;
  }

  get message(): string {
    switch (this.category) {
      case CategoryURL.Service:
        return MessageTabOne.Service;
      case CategoryURL.Rent:
        return MessageTabOne.Rent;
      case CategoryURL.Shop:
        return MessageTabOne.Shop;
    }
  }

  get messageTwo(): string {
    switch (this.category) {
      case CategoryURL.Service:
        return MessageTabTwo.Service;
      case CategoryURL.Rent:
        return MessageTabTwo.Rent;
      case CategoryURL.Shop:
        return MessageTabTwo.Shop;
    }
  }

  public tabSelected(n: number): void {
    this.tab = n;
  }

}
