import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

import { FormsAbstract } from 'src/app/components/abstract/form.abstact';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { RateItem } from 'src/app/models/form.model';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage extends FormsAbstract implements OnInit {

  public cities = [
    'Cartagena',
    'Barranquilla',
    'Montería',
    'Santa Marta',
    'Sincelejo',
    'Riohacha',
    'Valledupar',
  ];
  public stars = [5, 4, 3, 2, 1];
  public rate: RateItem = {
    rateItem: 0,
    rateUser: 0,
    comment: ''
  };
  public form: FormGroup;
  public promedio: number;

  constructor(
    private route: ActivatedRoute,
    private firebase: FirebaseService,
    private formBuilder: FormBuilder,
    private _location: Location
  ) {
    super();
  }

  public async ngOnInit() {
    this.uniqueid = this.route.snapshot.paramMap.get('uniqueid');
    if (this.uniqueid) {
      const user = await this.firebase.obtenerUniqueIdPromise('usuario-app', this.uniqueid);
      this.user = user[0];
      this.initForm(this.user);
      this.promedio = this.starsPromedio();
    } else {
      const user = await this.firebase.obtenerUniqueIdPromise('usuario-app', this.user.uniqueid);
      this.user = user[0];
      this.initForm(this.user);
      this.promedio = this.starsPromedio();
    }
  }

  public initForm(data?: User): void {
    this.form = this.formBuilder.group({
      name: ['' || data.name, Validators.required],
      city: ['' || data.city, Validators.required],
      tel: ['' || data.tel, Validators.required],
      email: ['' || data.email, Validators.required],
    });
    if (this.uniqueid) {
      this.form.get('name').disable();
      this.form.get('city').disable();
      this.form.get('tel').disable();
      this.form.get('email').disable();
    }
  }

  public goBack(): void {
    this._location.back();
  }

  public validateinput(param: string): boolean {
    return this.form.get(param).invalid && this.form.get(param).touched;
  }

  public update(): void {
    if (this.validators()) {
      this.user.name = this.form.get('name').value;
      this.user.city = this.form.get('city').value;
      this.user.tel = this.form.get('tel').value;
      this.user.email = this.form.get('email').value;
      localStorage.setItem('NEGOCIAPP_USER', JSON.stringify(this.user));
      this.firebase.actualizarDatos('usuario-app', this.user, this.user.id).then(() => {
        Swal.fire('Bien Hecho', 'Datos actualizados correctamente', 'success');
      });
    }
  }

  public starsPromedio(): number {
    let accumulator = 0;
    let quantity = 0;
    this.user.rate.forEach(item => {
      quantity++;
      accumulator = accumulator + item.service;
    });
    const promedio = accumulator / quantity;
    return promedio;
  }

  private validators(): boolean {
    Object.values(this.form.controls).forEach(item => {
      if (item instanceof FormControl) {
        item.markAsTouched();
      }
    });
    return this.form.invalid ? false : true;
  }

}
