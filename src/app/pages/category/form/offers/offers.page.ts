import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FirebaseService } from 'src/app/core/services/firebase.service';
import { FormsAbstract } from 'src/app/components/abstract/form.abstact';

import { DataForm } from 'src/app/models/form.model';
import { CategoryURL } from 'src/app/models/category.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage extends FormsAbstract implements OnInit {

  public category: string;
  public uniqueid: string;
  public item: DataForm;
  public index: number;

  constructor(
    private route: ActivatedRoute,
    private firebase: FirebaseService) {
    super();
  }

  public async ngOnInit() {
    this.index = parseInt(this.route.snapshot.paramMap.get('index'), 0);
    this.category = this.route.snapshot.paramMap.get('category');
    this.uniqueid = this.route.snapshot.paramMap.get('uniqueid');
    const dataForm = await this.firebase.obtenerUniqueIdPromise(this.collectionDataBD, this.uniqueid);
    this.item = dataForm[0];
  }

  get thirdMessage(): string {
    switch (this.category) {
      case CategoryURL.Service: {
        return 'Ofertas Al Servicio Recibidas';
      }
      case CategoryURL.Rent: {
        return 'Ofertas Al Arriendo Recibidas';
      }
      case CategoryURL.Shop: {
        return 'Ofertas Al Producto Recibidas';
      }
    }
  }

}
