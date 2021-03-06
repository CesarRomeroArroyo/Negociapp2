import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

import { FirebaseService } from 'src/app/core/services/firebase.service';
import { StateApp } from 'src/app/core/services/state.service';
import { CollectionsBd, DataForm, nameCard } from 'src/app/models/form.model';
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
  @Output() public tab = new EventEmitter<number>();

  constructor(
    private firebase: FirebaseService,
    private router: Router) {
    super();
  }

  ngOnInit() {
    switch (this.type) {
      case nameCard.IsList:
        this.getListUser();
        break;
      case nameCard.IsMyOffers:
        this.getMyoffers();
        break;
      case nameCard.IsOffers:
        this.getOffers();
        break;
      case nameCard.IsMyHistorial:
        this.getMyHistorial();
        break;
      case nameCard.IsMyHistorialOffers:
        this.getMyHistorialOffers();
        break;
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  get textWithoutItem(): string {
    return this.category === this.service ? 'SIN SERVICIOS' :
      this.category === this.rent ? 'SIN ALQUILERES' : 'SIN PRODUCTOS';
  }

  public getListUser(): void {
    this.subscription = this.firebase.obtenerForObsevable(
      this.collectionDataBD,
      CollectionsBd.UserRequest,
      this.user.uniqueid).subscribe(data => this.list = data);
  }

  public getOffers(): void {
    this.firebase.obtener(this.collectionDataBD).subscribe(data => {
      const Alloffers = data;
      const offerA = Alloffers.filter((offer) => {
        return !offer.userOffers.includes(this.user.uniqueid) && offer.userRequest !== this.user.uniqueid
          && offer?.close === false;
      });
      data?.length > 0 ? this.list = offerA : this.list = [];
    });
  }

  public getMyoffers(): void {
    this.firebase.obtener(this.collectionDataBD).subscribe((data: DataForm[]) => {
      const dataArray = data.filter(item => item.userOffers.includes(this.user.uniqueid));
      this.list = dataArray;
    });
  }

  public getMyHistorial(): void {
    this.firebase.obtener(this.collectionBDFinalizate).subscribe((data: DataForm[]) => {
      const dataArray = data.filter(item => item.userRequest === this.user.uniqueid);
      this.list = dataArray;
    });
  }

  public getMyHistorialOffers(): void {
    this.firebase.obtener(this.collectionBDFinalizate).subscribe((data: DataForm[]) => {
      const dataArray = data.filter(item => item.userOffers.includes(this.user.uniqueid));
      this.list = dataArray;
    });
  }

  public selectOffer(item: DataForm, index: number): void {
    this.router.navigate([`/category/${this.category}/form/offers/${item.uniqueid}/${index}`]);
  }

  public goToDetail(item: DataForm): void {
    this.router.navigate([`/category/${this.category}/list-offers/offer-detail/${item.uniqueid}`]);
  }

  public goToDetailHistorial(item: DataForm, index: number): void {
    this.router.navigate([`category/${this.category}/my-deals/offer-detail/${item.uniqueid}/${index}`]);
  }

  public goToDetailRate(item: DataForm, index: number): void {
    this.router.navigate([`category/${this.category}/my-deals/rate/${item.uniqueid}/${index}`]);
  }

  public goToDetails(item: DataForm): void {
    this.router.navigate([`/category/${this.category}/form/details/${item.uniqueid}`]);
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
