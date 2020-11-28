import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  currentColor: string;
  userImage: any = "/assets/img/user_perfilxxxhdpi.png";
  services = false;
  registerData: any = {};
  images = [];
  files = [];
  numCC = 0;
  numPic = 0;
  numHV = 0;
  rate = 0;
  constructor(
    private router: Router,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.registerData = JSON.parse(localStorage.getItem('NEGOCIAPP_USER'));
  }

  goToHome() {
    this.router.navigateByUrl('inicio');
  }

  next() {
    this.firebaseService.actualizarDatos('usuario-app', this.registerData, this.registerData.id);
    Swal.fire(
      '',
      'Tus datos fueron actualizados correctamente',
      'success' 
    );
    this.firebaseService.actualizarDatos('usuario-app', this.registerData, this.registerData.id);
  }

}
