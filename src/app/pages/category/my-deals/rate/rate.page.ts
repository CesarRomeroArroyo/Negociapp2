import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { FormsAbstract } from 'src/app/components/abstract/form.abstact';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { DataForm } from 'src/app/models/form.model';
import { RateItem } from 'src/app/models/form.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.page.html',
  styleUrls: ['./rate.page.scss'],
})
export class RatePage extends FormsAbstract implements OnInit {

  public item: DataForm;
  public index: number;

  public stars = [5, 4, 3, 2, 1];

  public rate: RateItem = {
    rateItem: 0,
    rateUser: 0,
    comment: ''
  };

  public isUserRequest: boolean;

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
    this.isUserRequest = this.user.uniqueid === this.item.userRequest ? true : false;
    if (this.item.rate)
      this.rate = this.item.rate;
  }

  public selectStarsItem(index: number): void {
    if (!this.item.rate && this.isUserRequest)
      this.rate.rateItem = index + 1;
  }

  public selectStarsUser(index: number): void {
    if (!this.item.rate && this.isUserRequest)
      this.rate.rateUser = index + 1;
  }


  get userRequest(): string {
    return this.isUserRequest ? this.item.userOffers[0] : this.item.userRequest;
  }

  validation(): boolean {
    if (this.rate.rateItem === 0 || this.rate.rateUser === 0) {
      return false;
    } else {
      return true;
    }
  }

  public async save(): Promise<void> {
    if (this.validation()) {
      const dataForm = {
        rate: {
          rateUser: this.rate.rateUser,
          rateProduct: this.rate.rateItem,
          comment: this.rate.comment,
        }
      }
      this.item.rate = this.rate;
      const data = await this.firebase.obtenerUniqueIdPromise('usuario-app', this.userRequest);
      const user: User = data[0];
      user.rate.push({
        service: dataForm.rate.rateUser,
        product: dataForm.rate.rateProduct,
        uniqueidItem: this.item.uniqueid
      });
      this.firebase.actualizarDatos('usuario-app', user, user.id);
      this.saveData();
    }
  }

  private saveData(): void {
    this.firebase.actualizarDatos(
      this.collectionBDFinalizate, this.item, this.item.id).then(() => {
        Swal.fire('', 'Calificacion exitosa', 'success');
        this.router.navigate([`category/${this.category}`]);
        /**
         * TODO: One signal
         */
      });
  }

}
