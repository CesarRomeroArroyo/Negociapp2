import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;
import Swal from 'sweetalert2';

import { DataForm, Photo } from '../../models/form.model';
import { FormsAbstract } from '../abstract/form.abstact';

import { UniqueService } from 'src/app/core/services/unique.service';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { StateApp } from 'src/app/core/services/state.service';
import { FileManagerService } from 'src/app/core/services/file-manager.service';

@Component({
  selector: 'app-formComponent',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent extends FormsAbstract implements OnInit, OnDestroy {

  @Input() public categories: string[] = [];
  @Input() public photos: Photo[] = [];
  @Output() public showCategories = new EventEmitter<boolean>();
  @Output() public showPhotos = new EventEmitter<boolean>();

  public form: FormGroup;
  public data: DataForm;
  public types: any[] = [];
  public numberMask = createNumberMask({
    prefix: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private firebase: FirebaseService,
    private uniqueId: UniqueService,
    private state: StateApp,
    private fileManager: FileManagerService,) {
    super();
  }

  public async ngOnInit() {
    this.initForm();
    await this.getTypes();
    this.state.getObservable().subscribe(data => {
      if (data.categories) this.categories = data.categories;
      if (data.photos) this.photos = data.photos;
    });
  }
  public ngOnDestroy() {
    this.resetForm();
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

  public async create(): Promise<void> {
    if (this.validators()) {
      const priceMask = this.form.get('valueMask').value;
      const price = priceMask.replace(/,/g, '');
      const coordinates = await Geolocation.getCurrentPosition();
      if (this.photos.length > 0) {
        this.photos.forEach(async (element) => {
          const idunique = this.uniqueId.uniqueId();
          const path = `${this.user.uniqueid}/${this.category}/${idunique}`;
          await this.fileManager.uploadImageBase64(element.dataUrl, path);
          element.filepath = path;
          element.dataUrl = await this.fileManager.getUrlFileInfo(path);
        });
      }
      setTimeout(() => {
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
        delete dataForm.valueMask;
        this.firebase.save(this.saveFormDataCollection, dataForm).then(() => {
          Swal.fire('', 'Datos almacenados correctamente', 'success');
          /**
           * TODO: One signal Pendiente
           */
          this.resetForm();
        }).catch(err => {
          Swal.fire('Error', err.message, 'error');
        });
      }, 2000);

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

  private resetForm(): void {
    this.form.reset();
    this.state.setData({ categories: [] });
    this.state.setData({ photos: [] });
  }
}
