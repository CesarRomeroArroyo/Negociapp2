import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CategoryPath, CategoryURL } from 'src/app/models/category.model';
import { MessageTabOne, MessageTabTwo } from '../../../models/form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  public tab = 1;
  public category: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(url => {
      this.category = url.category;
    });
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
