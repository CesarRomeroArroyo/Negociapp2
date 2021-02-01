import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../core/services/firebase.service';
import { LoadingController } from '@ionic/angular';
import { User } from '../models/user.model';
import Swal from 'sweetalert2';
import { CITIES } from '../constans/constans-global';

const { Geolocation, Device } = Plugins;
const path = { name: '', path: '', url: '' }
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
    rate: []
  };
  public form: FormGroup;
  public coordinates: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private loadingController: LoadingController,
  ) { this.initForm() }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('NEGOCIAPP_LOGGED'))) {
      this.router.navigateByUrl('/inicio');
    }
    this.obtenerCoordenadas();
  }

  public initForm(data?): void {
    this.form = this.formBuilder.group({
      num_ide: ['' || data?.id, Validators.required],
      name: ['' || data?.name, Validators.required],
      email: ['' || data?.name, Validators.required],
      tel: ['' || data?.tel, Validators.required],
      typeId: ['' || data?.typeId, Validators.required],
      city: ['' || data?.city, Validators.required],
    });
  }

  async obtenerCoordenadas() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.registerData.lat = coordinates.coords.latitude;
    this.registerData.lng = coordinates.coords.longitude;
  }

  async next() {
    if (await this.validators()) {
      const loading = await this.loadingController.create({
        message: 'Espere por favor...',
      });
      await loading.present();
      const coordinates = await Geolocation.getCurrentPosition();
      const idTel = await Device.getInfo();
      this.registerData.uniqueid = idTel.uuid;
      this.registerData.lat = coordinates.coords.latitude;
      this.registerData.lng = coordinates.coords.longitude;
      this.registerData.nameToSearch = this.registerData.name;
      this.registerData.onesignal = JSON.parse(localStorage.getItem('NEGOCIAPP_ONESIGNALUI'));
      const data = {
        ...this.form.value,
        ...this.registerData
      }
      this.firebaseService.save('usuario-app', data)
        .then(() => {
          localStorage.setItem('NEGOCIAPP_USER', JSON.stringify(data));
          this.router.navigateByUrl('/home/bienvenida');
          loading.dismiss();
        }).catch(err => Swal.fire('Error', err.message, 'error'));
    }
  }

  async isLogged() {
    const data = await this.firebaseService.obtenerByContactoIDPromise((this.form.get('num_ide').value));
    if (data.length > 0) {
      localStorage.setItem('NEGOCIAPP_USER', JSON.stringify(data[0]))
      localStorage.setItem('NEGOCIAPP_LOGGED', JSON.stringify(true));
      Swal.fire('', 'Ya te encontrabas registrado en nuestra plataforma. Bienvenido!', 'success')
      localStorage.setItem('NEGOCIAPP_RELOGGED', JSON.stringify(true));
      this.router.navigateByUrl('/home/bienvenida');
    }
  }

  public validateinput(param: string): boolean {
    return this.form.get(param).invalid && this.form.get(param).touched;
  }

  private async validators(): Promise<boolean> {
    let coord = true;
    Object.values(this.form.controls).forEach(item => {
      if (item instanceof FormControl) { item.markAsTouched(); }
    });
    try {
      this.coordinates = await Geolocation.getCurrentPosition();
      coord = false;
    } catch { Swal.fire('', 'Debes tener el GPS activo', 'warning'); }
    return this.form.invalid || coord ? false : true;
  }

}
