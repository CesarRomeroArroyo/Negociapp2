import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsAbstract } from 'src/app/components/abstract/form.abstact';
import { CategoryURL } from 'src/app/models/category.model';

@Component({
  selector: 'app-my-deals',
  templateUrl: './my-deals.page.html',
  styleUrls: ['./my-deals.page.scss'],
})
export class MyDealsPage extends FormsAbstract implements OnInit {

  public tab = 1;

  constructor(
    private route: ActivatedRoute,
  ) {
    super();
  }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    this.uniqueid = this.route.snapshot.paramMap.get('uniqueid');
  }

  get thirdMessage(): string {
    switch (this.category) {
      case CategoryURL.Service: {
        if (this.tab === 1) return 'Mis Compras';
        else return 'Mis Ventas'
      }
      case CategoryURL.Rent: {
        if (this.tab === 1) return 'Mis Compras';
        else return 'Mis Ventas'
      }
      case CategoryURL.Shop: {
        if (this.tab === 1) return 'Mis Compras';
        else return 'Mis Ventas'
      }
    }
  }

}
