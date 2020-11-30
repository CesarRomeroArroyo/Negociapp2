import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FirebaseService } from 'src/app/core/services/firebase.service';
import { FormsAbstract } from 'src/app/components/abstract/form.abstact';

import { DataForm } from 'src/app/models/form.model';
import { CategoryPath, CategoryURL } from 'src/app/models/category.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage extends FormsAbstract implements OnInit {

  public category: string;
  public uniqueid: string;
  public item: DataForm;

  constructor(
    private route: ActivatedRoute,
    private firebase: FirebaseService) {
    super();
  }

  public async ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    this.uniqueid = this.route.snapshot.paramMap.get('uniqueid');
    const dataForm = await this.firebase.obtenerUniqueIdPromise(this.collectionDataBD, this.uniqueid);
    this.item = dataForm[0];
  }

}
