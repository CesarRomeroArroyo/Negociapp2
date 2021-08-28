import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { FirebaseService } from '../core/services/firebase.service';
import { User } from '../models/user.model';
import { CITIES } from '../constans/constans-global';
import { StatusUserLoggin } from './entities/home.types';
import { LOCALSTORAGE } from '../constans/localStorage';

const { Geolocation, Device } = Plugins;
const path = { name: '', path: '', url: '' };

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public identificationType = [
    { name: 'Cedula de ciudadanía', value: 'Cedula' },
    { name: 'Cedula extranjera', value: 'CedulaExtranjera' },
    { name: 'Pasaporte', value: 'Pasaporte' }
  ];
  public cities = CITIES;
  public registerData: User = {
    uniqueid: null,
    prestador: true,
    service: true,
    rent: true,
    shop: true,
    miders: { status: false, categories: [], typesService: [], cities: [], rut: path },
    midera: { status: false, categories: [], typesService: [], cities: [], rut: path },
    miderv: { status: false, categories: [], typesService: [], cities: [], rut: path },
    lat: null,
    lng: null,
    active: true,
    nameToSearch: null,
    rate: [],
    photoUrl: '',
    photoRef: ''
  };
  public form: FormGroup;
  public coordinates: any;
  public filePhoto: File = null;
  public isLoading: boolean = true;
  public isUserLogged: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
  ) { this.initForm(); }

  ngOnInit() {
    this.isUserLogged = JSON.parse(localStorage.getItem(LOCALSTORAGE.LOGGED));
    if (this.isUserLogged) {
      this.isLoading = false;
      this.router.navigateByUrl('/inicio');
    } else {
      this.obtenerCoordenadas();
    }
  }

  get isValidImg(): boolean {
    return this.filePhoto === null ? true : false;
  }

  public initForm(data?): void {
    this.form = this.formBuilder.group({
      num_ide: ['' || data?.id, [Validators.required, Validators.pattern('^[0-9]*$')]],
      name: ['' || data?.name, [Validators.required, Validators.minLength(5)]],
      email: ['' || data?.name, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      // tel: ['' || data?.tel, [Validators.required, Validators.pattern('^[0-9]*$')]],
      typeId: ['' || data?.typeId, Validators.required],
      city: ['' || data?.city, Validators.required],
    });
    this.isLoading = false;
  }

  // public selectImg(file): void {
  //   if (file.target.files[0]) {
  //     this.filePhoto = file.target.files[0];
  //     const reader = new FileReader()
  //     reader.onload = (e: any) => {
  //       Swal.fire({
  //         text: 'Imagen seleccionada',
  //         imageUrl: e.target.result,
  //         imageAlt: 'The uploaded picture'
  //       });
  //     };
  //     reader.readAsDataURL(this.filePhoto);
  //   } else {
  //     this.filePhoto = null;
  //   }
  // }

  async obtenerCoordenadas() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.registerData.lat = coordinates.coords.latitude;
    this.registerData.lng = coordinates.coords.longitude;
  }

  public async isValidIdUser(): Promise<User> {
    const data: User[] = await this.firebaseService.obtenerByContactoIDPromise((this.form.get('num_ide').value));
    return data[0];
  }

  public async isLogged(): Promise<void> {
    const user = await this.isValidIdUser();
    if (user) {
      if (user.sessionActive) {
        Swal.fire('', 'Esta cuenta ya esta activa en otro dispositivo, por favor cierre la sesion para inicar en este dispositivo', 'warning');
      } else {
        localStorage.setItem(LOCALSTORAGE.USER, JSON.stringify(user));
        localStorage.setItem(LOCALSTORAGE.LOGGED, JSON.stringify(false));
        localStorage.setItem(LOCALSTORAGE.RELOGGED, JSON.stringify(true));
        Swal.fire('', 'Ya te encontrabas registrado en nuestra plataforma. Bienvenido!', 'success');
        this.form.reset();
        this.router.navigateByUrl(`/home/bienvenida/${StatusUserLoggin.RELOGGED}`);
      }
    }
  }

  public validateinput(param: string): boolean {
    return this.form.get(param).invalid && this.form.get(param).touched;
  }

  public async validators(): Promise<boolean> {
    let coord = true;
    Object.values(this.form.controls).forEach(item => {
      if (item instanceof FormControl) { item.markAsTouched(); }
    });
    try {
      this.coordinates = await Geolocation.getCurrentPosition();
      coord = false;
    } catch { Swal.fire('', 'Debes tener el GPS activo', 'warning'); }
    return this.form.invalid || coord === null ? false : true;
  }

  // private async uploadImg(): Promise<void> {
  //   this.registerData.photoRef = `user-profile/${this.registerData.uniqueid}/foto/${this.filePhoto.name}`;
  //   await this.storage.upload(this.filePhoto, this.registerData.photoRef);
  //   await this.storage.getUrlFileInfo(this.registerData.photoRef).then((url) => this.registerData.photoUrl = url);
  // }

  async next(): Promise<void> {
    this.isLoading = true;
    if (await this.validators()) {
      const user = await this.isValidIdUser();
      if (user) {
        Swal.fire('', 'Ya existe una cuenta con esta cedula', 'warning');
        this.isLoading = false;
      } else {
        const coordinates = await Geolocation.getCurrentPosition();
        const idTel = await Device.getInfo();
        this.registerData.uniqueid = idTel.uuid;
        this.registerData.lat = coordinates.coords.latitude;
        this.registerData.lng = coordinates.coords.longitude;
        this.registerData.nameToSearch = this.registerData.name;
        this.registerData.onesignal = JSON.parse(localStorage.getItem('NEGOCIAPP_ONESIGNALUI'));
        // await this.uploadImg();
        const data = { ...this.form.value, ...this.registerData };
        localStorage.setItem(LOCALSTORAGE.USER, JSON.stringify(data))
        this.isLoading = false;
        this.form.reset();
        this.router.navigateByUrl(`/home/bienvenida/${StatusUserLoggin.LOGGED}`);
      }
    }
  }

}
