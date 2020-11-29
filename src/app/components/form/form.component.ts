import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { UniqueService } from 'src/app/core/services/unique.service';
import { Plugins } from '@capacitor/core';
import Swal from 'sweetalert2';
const { Geolocation } = Plugins;

import { DataForm } from '../../models/form.model';
import { FormsAbstract } from './abstract/form.abstact';

@Component({
  selector: 'app-formComponent',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent extends FormsAbstract implements OnInit {

  @Input() public categories: string[] = ['Hola'];
  @Input() public photos: string[] = [];

  public form: FormGroup;
  public data: DataForm;
  public types: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private firebase: FirebaseService,
    private uniqueId: UniqueService) {
    super();
  }

  public async ngOnInit() {
    this.initForm();
    await this.getTypes();
  }

  public initForm(data?: DataForm): void {
    switch (this.category) {
      case this.service: {
        this.form = this.formBuilder.group({
          name: ['' || data?.name, Validators.required],
          type: ['' || data?.type, Validators.required],
          description: ['' || data?.description],
          valueMask: ['' || data?.valueMask, Validators.required],
        });
        break;
      }
      case this.rent: {
        this.form = this.formBuilder.group({
          name: ['' || data?.name, Validators.required],
          quantity: ['' || data?.quantity, Validators.required],
          time: ['' || data?.time, Validators.required],
          timeFor: ['' || data?.timeFor, Validators.required],
          description: ['' || data?.description],
          valueMask: ['' || data?.valueMask, Validators.required],
        });
        break;
      }
      case this.shop: {
        this.form = this.formBuilder.group({
          name: ['' || data?.name, Validators.required],
          state: ['' || data?.state, Validators.required],
          description: ['' || data?.description],
          valueMask: ['' || data?.valueMask, Validators.required],
        });
      }
    }
  }

  public async getTypes(): Promise<any> {
    this.types = await this.firebase.obtenerPromise('services-types');
  }

  public validateinput(param: string): boolean {
    return this.form.get(param).invalid && this.form.get(param).touched;
  }

  public showCategoria(): void { }

  public showPhotos(): void { }

  public async create(): Promise<void> {
    if (this.validators()) {
      const priceMask = this.form.get('valueMask').value;
      const price = priceMask.replace(/,/g, '');
      const coordinates = await Geolocation.getCurrentPosition();
      const dataForm: DataForm = {
        ...this.form.value,
        categories: this.categories,
        photos: this.photos,
        value: price,
        uniqueid: this.uniqueId.uniqueId(),
        userRequest: this.user.uniqueid,
        offerit: [],
        userOffers: [],
        close: false,
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude,
        oneSignalRequest: this.user.onesignal,
      }
      this.firebase.save(this.saveFormDataCollection, dataForm).then(() => {
        Swal.fire('', 'Datos almacenados correctamente', 'success');
        /**
         * TODO: One signal Pendiente
         */
        this.form.reset();
      }).catch(err => {
        Swal.fire('Error', err.message, 'error');
      });
    }
  }

  public update(): void { }

  private validators(): boolean {
    Object.values(this.form.controls).forEach(element => {
      if (element instanceof FormControl) {
        element.markAsTouched();
      }
    });
    this.categories.length === 0 ? this.invalid = true : this.invalid = false;
    return this.form.invalid || this.categories.length === 0 ? false : true;
  }
}
