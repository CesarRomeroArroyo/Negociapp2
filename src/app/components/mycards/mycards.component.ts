import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

import { FirebaseService } from 'src/app/core/services/firebase.service';
import { StateApp } from 'src/app/core/services/state.service';
import { CollectionsBd, DataForm } from 'src/app/models/form.model';
import { User } from 'src/app/models/user.model';
import { FormsAbstract } from '../abstract/form.abstact';

@Component({
  selector: 'app-mycards',
  templateUrl: './mycards.component.html',
  styleUrls: ['./mycards.component.scss'],
})
export class MycardsComponent extends FormsAbstract implements OnInit, OnDestroy {

  public list: DataForm[];
  public subscription: Subscription;

  @Input() public type: string;
  @Input() isOffers = false;
  @Output() public tab = new EventEmitter<number>();

  constructor(
    private firebase: FirebaseService,
    private router: Router) {
    super();
  }

  ngOnInit() {
    if(!this.isOffers){
      this.getListUser();
    } else {
      this.getOffers();
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public getListUser(): void {
    this.subscription = this.firebase.obtenerForObsevable(
      this.collectionDataBD,
      CollectionsBd.UserRequest,
      this.user.uniqueid).subscribe(data => this.list = data);
  }

  public getOffers() {
    this.firebase.obtener(this.collectionDataBD).subscribe(data => {
      const Alloffers  = data;
      const offerA = Alloffers.filter((offer) => {
        return !offer.userOffers.includes(this.user.uniqueid) && offer.userRequest !== this.user.uniqueid
        && offer?.close === false;
      });
      data?.length > 0 ? this.list = offerA : this.list = [];
    });
  }

  public selectOffer(item: DataForm): void {
    this.router.navigate([`/category/${this.category}/form/offers/${item.uniqueid}`]);
  }

  public goToDetail(item: DataForm): void {
    this.router.navigate([`/category/${this.category}/list-offers/offer-detail/${item.uniqueid}`]);
  }

  public goToEdit(item: DataForm): void {
    if (item.offerit.length === 0) {
      this.router.navigate([`/category/${this.category}/form/${item.uniqueid}`]);
    } else {
      Swal.fire(
        '',
        'No es posible editar el servicio ya que ya contiene ofertas relacionadas',
        'error'
      );
    }
  }

  public goToDelete(item: any): void {
    Swal.fire({
      title: '',
      text: 'Esta seguro de eliminar el producto?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then(result => {
      if (result.value) {
        if (item.offerit.length === 0) {
          this.firebase.eliminarDatos(this.collectionDataBD, item.id);
          this.tab.emit(1);
        }
      }
    });
  }

}
