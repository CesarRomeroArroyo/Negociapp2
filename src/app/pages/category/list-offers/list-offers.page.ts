import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormsAbstract } from 'src/app/components/abstract/form.abstact';
import { CategoryPath, CategoryURL } from 'src/app/models/category.model';

@Component({
  selector: 'app-list-offers',
  templateUrl: './list-offers.page.html',
  styleUrls: ['./list-offers.page.scss'],
})
export class ListOffersPage extends FormsAbstract implements OnInit {

  public category: string;
  public uniqueid: string;
  public tab = 1;

  constructor(
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    this.uniqueid = this.route.snapshot.paramMap.get('uniqueid');
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

}
