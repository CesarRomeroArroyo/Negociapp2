import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../core/services/firebase.service';

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
  constructor(
    private router: Router,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.registerData['prestador']=true;
    this.registerData['service']=true;
    this.registerData['rent']=true;
    this.registerData['shop']=true;
    this.obtenerCoordenadas();
  }

  async obtenerCoordenadas(){
    const coordinates = await Geolocation.getCurrentPosition();
    this.registerData['lat']= coordinates.coords.latitude;
    this.registerData['lng']= coordinates.coords.longitude;
  }

  async next(){
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
    this.registerData['miderv'] = {estado: false, categorias: [], niveles:[], rut:''};
    this.firebaseService.guardarDatos('usuario-app', this.registerData);
    localStorage.setItem('NEGOCIAPP_USER', JSON.stringify(this.registerData));
    this.router.navigateByUrl('/page2');
  }

  verificarExistencia() {
    this.tempo = this.firebaseService.obtenerByContactoID(this.registerData.num_ide).subscribe((data) => {
      if(data.length > 0){
        this.flag = true;
        localStorage.setItem('NEGOCIAPP_USER', JSON.stringify(data[0]))
        localStorage.setItem('NEGOCIAPP_LOGGED', JSON.stringify(true));
        Swal.fire(
          '',
          'Ya te encontrabas registrado en nuestra plataforma. Bienvenido!',
          'success'
        )
        localStorage.setItem('NEGOCIAPP_RELOGGED', JSON.stringify(true));
        this.router.navigateByUrl('/page2');
      }
    });
  }

}
