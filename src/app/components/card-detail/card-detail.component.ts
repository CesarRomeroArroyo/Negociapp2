import { Component, Input, OnInit } from '@angular/core';
import { DataForm, OfferUser } from 'src/app/models/form.model';
import { FormsAbstract } from '../abstract/form.abstact';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent extends FormsAbstract implements OnInit {

  @Input() item: DataForm;
  @Input() offer: OfferUser;
  @Input() isDeal: boolean;

  constructor() {
    super();
  }

  ngOnInit() { }

  get days(): string {
    const day = this.offer.days;
    return day.toString() === '1' ? 'día' : 'días';
  }

}
