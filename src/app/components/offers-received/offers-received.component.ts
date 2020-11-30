import { Component, OnInit } from '@angular/core';

import { FormsAbstract } from '../abstract/form.abstact';

@Component({
  selector: 'app-offers-received',
  templateUrl: './offers-received.component.html',
  styleUrls: ['./offers-received.component.scss'],
})
export class OffersReceivedComponent extends FormsAbstract implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() { }

}
