import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsAbstract } from 'src/app/components/abstract/form.abstact';

@Component({
  selector: 'app-my-deals',
  templateUrl: './my-deals.page.html',
  styleUrls: ['./my-deals.page.scss'],
})
export class MyDealsPage extends FormsAbstract implements OnInit {

  public tab = 1;

  constructor(
    private route: ActivatedRoute,
  ) {
    super();
  }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    this.uniqueid = this.route.snapshot.paramMap.get('uniqueid');
  }

}
