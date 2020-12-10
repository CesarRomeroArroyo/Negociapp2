import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2';

import { FormsAbstract } from 'src/app/components/abstract/form.abstact';
import { DataForm } from 'src/app/models/form.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-list-offers',
  templateUrl: './list-offers.page.html',
  styleUrls: ['./list-offers.page.scss'],
})
export class ListOffersPage extends FormsAbstract implements OnInit {

  public tab = 1;
  public offers: DataForm[];

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
    super();
  }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    this.uniqueid = this.route.snapshot.paramMap.get('uniqueid');
    if (!this.user[this.userMider].status) {
      Swal.fire('', 'Debes configurarte como Mider para poder ofertar', 'warning');
      this.router.navigate(['mider']);
    }
  }

}
