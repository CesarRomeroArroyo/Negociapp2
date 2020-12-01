import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormsAbstract } from 'src/app/components/abstract/form.abstact';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { DataForm } from 'src/app/models/form.model';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.page.html',
  styleUrls: ['./offer-detail.page.scss'],
})
export class OfferDetailPage extends FormsAbstract implements OnInit {

  public uniqueid: string;
  public category: string;
  public item: DataForm;
  public slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(
    private route: ActivatedRoute,
    private firebase: FirebaseService,
  ) {
    super();
  }

  public async ngOnInit() {
    this.uniqueid = this.route.snapshot.paramMap.get('uniqueid');
    this.category = this.route.snapshot.paramMap.get('category');
    const dataForm = await this.firebase.obtenerUniqueIdPromise(this.collectionDataBD, this.uniqueid);
    this.item = dataForm[0];
  }

}
