import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';

const { Geolocation, Device } = Plugins;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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

}
