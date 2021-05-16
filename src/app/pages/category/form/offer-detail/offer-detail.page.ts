import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as moment from 'moment';

import { FormsAbstract } from 'src/app/components/abstract/form.abstact';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { DataForm } from 'src/app/models/form.model';
import { OneSignalService } from 'src/app/core/services/one-signal.service';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.page.html',
  styleUrls: ['./offer-detail.page.scss'],
})
export class OfferDetailPage extends FormsAbstract implements OnInit {

  public item: DataForm;
  public uniqueid: string;
  public index: number;
  public isCancel = false;

  constructor(
    private route: ActivatedRoute,
    private firebase: FirebaseService,
    private router: Router,
    private oneSignal: OneSignalService,
  ) {
    super();
  }

  public async ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    this.uniqueid = this.route.snapshot.paramMap.get('uniqueid');
    this.index = parseInt(this.route.snapshot.paramMap.get('index'), 0);
    const dataForm = await this.firebase.obtenerUniqueIdPromise(this.collectionDataBD, this.uniqueid);
    this.item = dataForm[0];
  }

  public dealOffer(): void {
    this.item.close = true;
    this.item.closeDate = moment().format('DD/MM/YYYY');
    this.item.offerit = [this.item.offerit[this.index]];
    this.item.userOffers = [this.item.offerit[0].user.uniqueid];
    this.firebase.eliminarDatos(this.collectionDataBD, this.item.id);
    this.firebase.save(this.collectionBDFinalizate, this.item).then(() => {
      Swal.fire('', 'Su oferta fue enviada correctamente', 'success');
      this.oneSignal.sendDirectMessage(
        this.item.offerit[0].user.onesignal,
        `¡${this.user.name} ha cerrado el trato, felicitaciones!`,
        {
          target: `category/${this.category}/my-deals/offer-detail/${this.item.uniqueid}/${this.item.offerit.length - 1}`,
          type: 'redirect'
        }
      );
      this.router.navigateByUrl(`/category/${this.category}`);
    }).catch(err => {
      Swal.fire('Error', err.message, 'error');
    });
  }

  public cancelOffer(): void {
    Swal.fire({
      title: '',
      text: 'Esta seguro de cancelar esta propuesta?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Cancelar!',
      cancelButtonText: 'No'
    }).then((result) => {
      this.isCancel = true;
      if (result.value) {
        this.oneSignal.sendDirectMessage(
          this.item.offerit[0].user.onesignal,
          `${this.user.name} ha cancelado una de tus ofertas`,
          {
            target: `category/${this.category}/list-offers/offer-detail/${this.item.uniqueid}/${this.item.offerit.length - 1}`,
            type: 'redirect'
          }
        );
        this.item.userOffers = this.item.userOffers.filter((uniqueid) => {
          return uniqueid !== this.item.offerit[this.index].user.uniqueid
        });
        this.item.offerit = this.item.offerit.filter((offer) => {
          return offer.user.uniqueid !== this.item.offerit[this.index].user.uniqueid
        });
        this.firebase.actualizarDatos(this.collectionDataBD, this.item, this.item.id).then(() => {
          Swal.fire('', 'La propuesta fue cancelada correctamente.', 'success');
          this.router.navigate([`/category/${this.category}`]);
        });
      }
    });
  }

}
