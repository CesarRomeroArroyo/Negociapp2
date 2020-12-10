import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;
import Swal from 'sweetalert2';

import { DataForm, Photo } from '../../models/form.model';
import { FormsAbstract } from '../abstract/form.abstact';

import { UniqueService } from 'src/app/core/services/unique.service';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { StateApp } from 'src/app/core/services/state.service';
import { FileManagerService } from 'src/app/core/services/file-manager.service';
import { LoadingController } from '@ionic/angular';
import { OneSignalService } from 'src/app/core/services/one-signal.service';
import { User } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-formComponent',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent extends FormsAbstract implements OnInit {

  @Input() public idunique: string;
  @Output() public showCategories = new EventEmitter<boolean>();
  @Output() public showPhotos = new EventEmitter<boolean>();

  public categories: string[] = [];
  public photos: Photo[] = [];
  public photosDataBD: Photo[] = [];
  public photosDelete: string[] = [];
  public form: FormGroup;
  public types: any[] = [];
  public subscription: Subscription;


  constructor(
    private formBuilder: FormBuilder,
    private firebase: FirebaseService,
    private uniqueId: UniqueService,
    private state: StateApp,
    private fileManager: FileManagerService,
    private loadingController: LoadingController,
    private oneSignal: OneSignalService
  ) {
    super();
  }

  public async ngOnInit() {
    this.initForm();
    await this.getTypes();
    if (this.idunique) {
      this.getDataUpdate();
    }
    this.subscription = this.state.getObservable().subscribe(data => {
      console.log(data);
      if (data.categories) this.categories = data.categories;
      if (data.photos) this.photos = data.photos;
      if (data.photosDelete) this.photosDelete = data.photosDelete;
    });
  }

  public ionViewDidLeave() {
    this.subscription.unsubscribe();
    this.resetForm();
  }

  public async getDataUpdate(): Promise<void> {
    const dataForm = await this.firebase.obtenerUniqueIdPromise(this.collectionDataBD, this.idunique);
    const data: DataForm = dataForm[0];
    this.initForm(data);
    this.state.setData({ categories: data.categories });
    this.state.setData({ photos: data.photos });
  }

  public initForm(data?: DataForm): void {
    switch (this.category) {
      case this.service: {
        this.form = this.formBuilder.group({
          name: ['' || data?.name, Validators.required],
          type: ['' || data?.type, Validators.required],
          description: ['' || data?.description],
          valueMask: ['' || data?.value, Validators.required],
          id: ['' || data?.id],
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
          valueMask: ['' || data?.value, Validators.required],
          id: ['' || data?.id],
        });
        break;
      }
      case this.shop: {
        this.form = this.formBuilder.group({
          name: ['' || data?.name, Validators.required],
          state: ['' || data?.state, Validators.required],
          description: ['' || data?.description],
          valueMask: ['' || data?.value, Validators.required],
          id: ['' || data?.id],
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
      const loading = await this.loadingController.create({
        message: 'Creando solicitud...',
      });
      await loading.present();
      if (this.photos.length > 0) {
        this.photos.forEach(async (item, index) => {
          const idunique = this.uniqueId.uniqueId();
          const path = `${this.user.uniqueid}/${this.category}/${idunique}`;
          await this.fileManager.uploadImageBase64(item.dataUrl, path);
          item.filepath = path;
          this.fileManager.getUrlFileInfo(path).then((url) => {
            item.dataUrl = url;
            this.photosDataBD.push(item);
            if (this.photosDataBD.length === this.photos.length)
              this.createData(loading);
          });
        });
      } else {
        this.createData(loading);
      }
    }
  }

  public async createData(loading?: HTMLIonLoadingElement): Promise<void> {
    const priceMask = this.form.get('valueMask').value;
    const price = priceMask.replace(/,/g, '');
    const coordinates = await Geolocation.getCurrentPosition();
    const dataForm: DataForm = {
      ...this.form.value,
      categories: this.categories,
      photos: this.photosDataBD,
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
    this.firebase.save(this.collectionDataBD, dataForm).then(() => {
      Swal.fire('', 'Datos almacenados correctamente', 'success');
      this.sendNotifications(dataForm.uniqueid);
      loading.dismiss();
    }).catch(err => {
      Swal.fire('Error', err.message, 'error');
    });
  }

  public async update(): Promise<void> {
    if (this.validators()) {
      const loading = await this.loadingController.create({
        message: 'Actualizando Datos...',
      });
      await loading.present();
      if (this.photosDelete.length > 0) {
        this.photosDelete.forEach(item => {
          this.fileManager.deleteFilesFolder(item);
        });
      }
      if (this.photos.length > 0) {
        const arrayTemp = this.photos.filter(item => {
          return item.dataUrl.indexOf('data:image/') !== -1;
        });
        if (arrayTemp.length > 0) {
          arrayTemp.forEach(async (item, index) => {
            const idunique = this.uniqueId.uniqueId();
            const path = `${this.user.uniqueid}/${this.category}/${idunique}`;
            item.filepath = path;
            await this.fileManager.uploadImageBase64(item.dataUrl, path);
            await this.fileManager.getUrlFileInfo(path).then(url => item.dataUrl = url);
            if ((index + 1) === arrayTemp.length) {
              this.updateData(loading);
            }
          });
        } else {
          this.updateData(loading);
        }
      } else {
        this.updateData(loading);
      }
    }
  }

  private updateData(loading?: HTMLIonLoadingElement): void {
    setTimeout(() => {
      const priceMask = this.form.get('valueMask').value;
      const price = priceMask.replace(/,/g, '');
      const dataForm: DataForm = {
        ...this.form.value,
        categories: this.categories,
        photos: this.photos,
        value: price,
      }
      delete dataForm.valueMask;
      this.firebase.actualizarDatos(this.collectionDataBD, dataForm, this.form.get('id').value).then(() => {
        Swal.fire('', 'Datos actualizados correctamente', 'success');
        this.resetForm();
        window.history.back();
        loading.dismiss();
      }).catch(err => {
        Swal.fire('Error', err.message, 'error');
      });
    }, 2000);
  }

  private validators(): boolean {
    Object.values(this.form.controls).forEach(item => {
      if (item instanceof FormControl) {
        item.markAsTouched();
      }
    });
    this.categories.length === 0 ? this.invalid = true : this.invalid = false;
    return this.form.invalid || this.categories.length === 0 ? false : true;
  }

  private resetForm(): void {
    this.form.reset();
    this.photosDataBD = [];
    this.state.setData({ categories: [] });
    this.state.setData({ photos: [] });
    this.state.setData({ photosDelete: [] });
  }

  private async sendNotifications(uniqueid: string) {
    const users: User[] = await this.firebase.obtenerPromise('usuario-app');
    users.forEach(user => {
      if (user.uniqueid !== this.user.uniqueid) {
        this.categories.forEach(category => {
          if (user[this.userMider].categories.includes(category)) {
            this.oneSignal.sendDirectMessage(
              user.onesignal,
              '!Hay un nuevo producto que concuerda con tus categorias!',
              { target: `category/${this.category}/list-offers/offer-detail/${uniqueid}`, type: 'redirect' }
            );
            this.resetForm();
          }
        });
      }
    });
  }
}
