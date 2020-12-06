import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsAbstract } from 'src/app/components/abstract/form.abstact';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { DataForm } from 'src/app/models/form.model';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.page.html',
  styleUrls: ['./offer-detail.page.scss'],
})
export class OfferDetailPage extends FormsAbstract implements OnInit {

  public item: DataForm;
  public index: number;

  constructor(
    private route: ActivatedRoute,
    private firebase: FirebaseService,
    private router: Router
  ) {
    super();
  }

  public async ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    this.uniqueid = this.route.snapshot.paramMap.get('uniqueid');
    this.index = parseInt(this.route.snapshot.paramMap.get('index'), 0);
    const dataForm = await this.firebase.obtenerUniqueIdPromise(this.collectionBDFinalizate, this.uniqueid);
    this.item = dataForm[0];
    console.log(this.item);
  }

}
