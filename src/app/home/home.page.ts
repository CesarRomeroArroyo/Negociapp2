import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';

const { Geolocation, Device } = Plugins;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{
  services = false;
  registerData: any = {};
  images = [];
  files = [];
  numCC = 0;
  numPic = 0;
  numHV = 0;
  flag: boolean = false;
  tempo: any;
  constructor() {}

  ngOnInit() {
    this.registerData['prestador']=true;
    this.registerData['service']=true;
    this.registerData['rent']=true;
    this.registerData['shop']=true;
  }

  async obtenerCoordenadas(){
    const coordinates = await Geolocation.getCurrentPosition();
    this.registerData['lat']= coordinates.coords.latitude;
    this.registerData['lng']= coordinates.coords.longitude;
  }

  next(){
    if (!this.registerData.tip_ide || !this.registerData.num_ide ||
      !this.registerData.name || !this.registerData.email  || !this.registerData.contact || !this.registerData.city) {
      Swal.fire(
        '',
        'Faltan datos, por favor incluye toda tu información',
        'error'
      )
      return;
    }
    var cc=0;
    const info = await Device.getInfo();
    this.registerData['uniqueid'] = info.uuid;
    this.registerData['onesignal'] = JSON.parse(localStorage.getItem('NEGOCIAPP_ONESIGNALUI'));
    this.registerData['active'] = true;
    this.registerData['nameToSearch'] = this.registerData['name'].toLowerCase();
    this.registerData['miders'] = {estado: false, categorias: [], niveles:[], rut:''};
    this.registerData['midera'] = {estado: false, categorias: [], niveles:[], rut:''};
    this.registerData['miderv'] = {estado: false, categorias: [], niveles:[], rut:''};}
  }

}
