import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-midera',
  templateUrl: './midera.component.html',
  styleUrls: ['./midera.component.scss'],
})
export class MideraComponent implements OnInit {
  user: any;
  numRUT = 0;
  files: any = [];
  selectNiveles = [];
  nivelArriendo = [{ name:'Especializado'},{name:'Profesional'},{name:'Tecnologo'},{name:'Tecnico'},{name:'Independiente'}];
  levelsSelected;
  constructor(
    private firebase: FirebaseService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('NEGOCIAPP_USER'));
  }

  next() {
    this.user.midera.rut = this.files.files;
    this.user.midera.niveles = this.levelsSelected;
    localStorage.setItem('NEGOCIAPP_USER', JSON.stringify(this.user));
    this.firebase.actualizarDatos('usuario-app', this.user, this.user.id);
    Swal.fire(
			'',
			'El Mider se creo correctamente',
			'success'
		);
  }

}
