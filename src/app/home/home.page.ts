import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../core/services/firebase.service';
import { User } from '../models/user.model';

const { Geolocation, Device } = Plugins;

const level = [
  { isChecked: false, value: 'Especializado' },
  { isChecked: false, value: 'Profesional' },
  { isChecked: false, value: 'Tecnologo' },
  { isChecked: false, value: 'Tecnico' },
  { isChecked: false, value: 'Independiente' },
];

const path = { name: '', path: '', url: '' }
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  services = false;
  registerData: User = {
    prestador: true,
    service: true,
    rent: true,
    shop: true,
    miders: { status: false, categories: [], levels: level, rut: path },
    midera: { status: false, categories: [], levels: level, rut: path },
    miderv: { status: false, categories: [], levels: level, rut: path },
  };
  images = [];
  files = [];
  numCC = 0;
  numPic = 0;
  numHV = 0;
  flag = false;
  tempo: any;
  constructor(
    private router: Router,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.registerData.prestador = true;
    this.registerData.service = true;
    this.registerData.rent = true;
    this.registerData.shop = true;
    this.obtenerCoordenadas();
  }

  async obtenerCoordenadas() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.registerData.lat = coordinates.coords.latitude;
    this.registerData.lng = coordinates.coords.longitude;
  }

  async next() {
    if (!this.registerData.tip_ide || !this.registerData.num_ide ||
      !this.registerData.name || !this.registerData.email || !this.registerData.contact || !this.registerData.city) {
      Swal.fire(
        '',
        'Faltan datos, por favor incluye toda tu información',
        'error'
      )
      return;
    }
    const coordinates = await Geolocation.getCurrentPosition();
    const info = await Device.getInfo();
    this.registerData.uniqueid = info.uuid;
    this.registerData.onesignal = JSON.parse(localStorage.getItem('NEGOCIAPP_ONESIGNALUI'));
    this.registerData.lat = coordinates.coords.latitude;
    this.registerData.lng = coordinates.coords.longitude;
    this.registerData.active = true;
    this.registerData.nameToSearch = this.registerData.name.toLowerCase();
    this.registerData.rate = [];
    this.firebaseService.save('usuario-app', this.registerData);
    localStorage.setItem('NEGOCIAPP_USER', JSON.stringify(this.registerData));
    this.router.navigateByUrl('/home/bienvenida');
  }

  async verificarExistencia() {
    const data = await this.firebaseService.obtenerByContactoIDPromise(this.registerData.num_ide);
    if (data.length > 0) {
      this.flag = true;
      localStorage.setItem('NEGOCIAPP_USER', JSON.stringify(data[0]))
      localStorage.setItem('NEGOCIAPP_LOGGED', JSON.stringify(true));
      Swal.fire(
        '',
        'Ya te encontrabas registrado en nuestra plataforma. Bienvenido!',
        'success'
      )
      localStorage.setItem('NEGOCIAPP_RELOGGED', JSON.stringify(true));
      this.router.navigateByUrl('/home/bienvenida');
    }
  }

}
