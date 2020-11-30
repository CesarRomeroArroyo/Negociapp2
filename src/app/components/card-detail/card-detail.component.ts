import { Component, Input, OnInit } from '@angular/core';
import { DataForm } from 'src/app/models/form.model';
import { FormsAbstract } from '../abstract/form.abstact';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent extends FormsAbstract implements OnInit {

  @Input() item: DataForm;
  @Input() isOffer: boolean;

  constructor() {
    super();
  }

  ngOnInit() { }

}
