import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferUser } from 'src/app/models/form.model';

import { FormsAbstract } from '../abstract/form.abstact';

@Component({
  selector: 'app-offers-received',
  templateUrl: './offers-received.component.html',
  styleUrls: ['./offers-received.component.scss'],
})
export class OffersReceivedComponent extends FormsAbstract implements OnInit {

  public uniqueid: string;

  @Input() item: OfferUser = null;
  @Input() index: number = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.uniqueid = this.route.snapshot.paramMap.get('uniqueid');
    this.category = this.route.snapshot.paramMap.get('category');
  }

  get days(): string {
    const day = this.item.days;
    return day.toString() === '1' ? 'día' : 'días';
  }

  public redirecto(path?: string): void {
    this.router.navigate([`category/${this.category}/form/offer-detail/${this.uniqueid}/${this.index}`]);
  }

}
