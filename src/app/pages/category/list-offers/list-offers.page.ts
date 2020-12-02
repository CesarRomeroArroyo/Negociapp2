import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormsAbstract } from 'src/app/components/abstract/form.abstact';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { CategoryPath, CategoryURL } from 'src/app/models/category.model';
import { DataForm } from 'src/app/models/form.model';

@Component({
  selector: 'app-list-offers',
  templateUrl: './list-offers.page.html',
  styleUrls: ['./list-offers.page.scss'],
})
export class ListOffersPage extends FormsAbstract implements OnInit {

  public tab = 1;
  public category: string;
  public uniqueid: string;
  public offers: DataForm[];

  constructor(
    private route: ActivatedRoute,
    private firbase: FirebaseService) {
    super();
  }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    this.uniqueid = this.route.snapshot.paramMap.get('uniqueid');
  }

}
