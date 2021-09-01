import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import Swal from 'sweetalert2';

import { FormsAbstract } from 'src/app/components/abstract/form.abstact';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { DataForm, OfferUser } from 'src/app/models/form.model';
import { User } from 'src/app/models/global/user.model';
import { OneSignalService } from 'src/app/core/services/one-signal.service';
import { CategoryURL } from 'src/app/models/category.model';

@Component({
  selector: 'app-offerit',
  templateUrl: './offerit.page.html',
  styleUrls: ['./offerit.page.scss'],
})
export class OfferitPage extends FormsAbstract implements OnInit {

  public item: DataForm;
  public form: FormGroup;

  constructor(
    private firebase: FirebaseService,
    private route: ActivatedRoute,
    private fromBuilder: FormBuilder,
    private loadingController: LoadingController,
    private router: Router,
    private oneSignal: OneSignalService
  ) {
    super();
  }

  public async ngOnInit() {
    this.initForm();
    this.uniqueid = this.route.snapshot.paramMap.get('uniqueid');
    this.category = this.route.snapshot.paramMap.get('category');
    const dataForm = await this.firebase.obtenerUniqueIdPromise(this.collectionDataBD, this.uniqueid);
    this.item = dataForm[0];
  }

  get thirdMessage(): string {
    switch (this.category) {
      case CategoryURL.Service: {
        return 'Ofertar Servicio';
      }
      case CategoryURL.Rent: {
        return 'Ofertar Alquiler';
      }
      case CategoryURL.Shop: {
        return 'Ofertar Producto';
      }
    }
  }

  public validFields(param: string): boolean {
    return this.form.get(param).invalid && this.form.get(param).touched;
  }

  public initForm(data?: OfferUser): void {
    this.form = this.fromBuilder.group({
      valueMask: ['' || data?.value, Validators.required],
      days: ['' || data?.days, Validators.required],
      conditions: ['' || data?.conditions],
    });
  }

  public async save(): Promise<void> {
    if (this.validateField()) {
      const loading = await this.loadingController.create({
        message: 'Ofertando...',
      });
      await loading.present();
      const dataValueMask = this.form.get('valueMask').value;
      const dataValue = dataValueMask.replace(/,/g, '');
      const dataForm: OfferUser = {
        ...this.form.value,
        value: dataValue,
        user: this.user
      }
      delete dataForm.valueMask;
      this.item.offerit.push(dataForm);
      this.item.userOffers.push(this.user.uniqueid);
      this.firebase.actualizarDatos(
        this.collectionDataBD, this.item, this.item.id).then(async () => {
          Swal.fire('', 'Su oferta fue realizada', 'success');
          this.router.navigate([`category/${this.category}/list-offers`]);
          const data = await this.firebase.obtenerUniqueIdPromise('usuario-app', this.item.userRequest);
          const user: User = data[0];
          this.oneSignal.sendDirectMessage(
            user.onesignal,
            `¡${this.user.name} ha hecho una oferta a una de tus solicitudes!`,
            { target: `category/${this.category}/form/offers/${this.item.uniqueid}/${this.item.offerit.length - 1}`, type: 'redirect' }
          );
          loading.dismiss();
        });
    }
  }

  private validateField(): boolean {
    Object.values(this.form.controls).forEach(element => {
      if (element instanceof FormControl) {
        element.markAsTouched();
      }
    });
    return this.form.valid ? true : false;
  }

}
