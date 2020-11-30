import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsAbstract } from 'src/app/components/abstract/form.abstact';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.page.html',
  styleUrls: ['./offer-detail.page.scss'],
})
export class OfferDetailPage extends FormsAbstract implements OnInit {

  public uniqueid: string;

  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    this.uniqueid = this.route.snapshot.paramMap.get('uniqueid');
  }

}
