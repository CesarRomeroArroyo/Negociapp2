import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormsAbstract } from 'src/app/components/abstract/form.abstact';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { UniqueService } from 'src/app/core/services/unique.service';
import { DataForm, OfferUser } from 'src/app/models/form.model';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.page.html',
  styleUrls: ['./offer-detail.page.scss'],
})
export class OfferDetailPage extends FormsAbstract implements OnInit {

  public item: DataForm;
  public slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(
    private route: ActivatedRoute,
    private firebase: FirebaseService,
    private router: Router,
    private uniqueService: UniqueService,
  ) {
    super();
  }

  public async ngOnInit() {
    this.uniqueid = this.route.snapshot.paramMap.get('uniqueid');
    this.category = this.route.snapshot.paramMap.get('category');
    const dataForm = await this.firebase.obtenerUniqueIdPromise(this.collectionDataBD, this.uniqueid);
    this.item = dataForm[0];
  }

  get offer(): OfferUser {
    const dataArray = this.item.offerit.filter(x => x.user.uniqueid === this.user.uniqueid);
    return dataArray[0];
  }

  get offerit(): boolean {
    return this.item.userOffers.includes(this.user.uniqueid);
  }

  get days(): string {
    const day = this.offer.days;
    return day.toString() === '1' ? 'día' : 'días';
  }

  public distance(): string {
      const distancia = this.uniqueService.distance(this.user.lng, this.user.lat, this.item.lng, this.item.lat);
      return distancia;
  }

  public redirecto(): void {
    this.router.navigate([`category/${this.category}/list-offers/offerit/${this.uniqueid}`]);
  }

}
