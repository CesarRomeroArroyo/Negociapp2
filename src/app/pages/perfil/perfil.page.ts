import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

import { FormsAbstract } from 'src/app/components/abstract/form.abstact';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { Ranking } from 'src/app/models/perfil.models';
import { FileManagerService } from 'src/app/core/services/file-manager.service';

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
  public promedio: number;
  public tab: number = 1;
  public dataRanking: Ranking = { allBussiness: 0, recommended: 0, notRecommended: 0, satisfied: 0, notSatisfied: 0, };
  public filePhoto: File = null;


  constructor(
    private route: ActivatedRoute,
    private firebase: FirebaseService,
    private _location: Location,
    private storage: FileManagerService,
  ) { super(); }

  public async ngOnInit() {
    this.uniqueid = this.route.snapshot.paramMap.get('uniqueid');
    if (this.uniqueid) {
      const user = await this.firebase.obtenerUniqueIdPromise('usuario-app', this.uniqueid);
      this.user = user[0];
    } else {
      const user = await this.firebase.obtenerUniqueIdPromise('usuario-app', this.user.uniqueid);
      this.user = user[0];
    }
    this.getDataRanking()
    this.promedio = this.starsPromedio();
  }

  public async selectImg(file): Promise<void> {
    if (file.target.files[0]) {
      this.filePhoto = file.target.files[0];
      const reader = new FileReader()
      reader.onload = (e: any) => {
        Swal.fire({
          text: 'Imagen seleccionada',
          imageUrl: e.target.result,
          imageAlt: 'The uploaded picture'
        });
      };
      reader.readAsDataURL(this.filePhoto);
      if (this.filePhoto !== null) {
        await this.uploadImg();
        this.update();
      }
    } else {
      this.filePhoto = null;
    }
  }

  public goBack(): void {
    this._location.back();
  }

  public update(event?: FormGroup): void {
    if (event) {
      this.user.name = event.get('name').value;
      this.user.city = event.get('city').value;
      this.user.tel = event.get('tel').value;
      this.user.email = event.get('email').value;
    }
    localStorage.setItem('NEGOCIAPP_USER', JSON.stringify(this.user));
    this.firebase.actualizarDatos('usuario-app', this.user, this.user.id).then(() => {
      Swal.fire('Bien Hecho', 'Datos actualizados correctamente', 'success');
    });
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

  public getDataRanking(): void {
    this.dataRanking.allBussiness = this.user?.rate.length;
    this.dataRanking.recommended = this.user?.rate.filter(x => x.recommend === true).length;
    this.dataRanking.notRecommended = this.user?.rate.filter(x => x.recommend === false).length;
    this.dataRanking.satisfied = this.user?.rate.filter(x => x.satisfied === true).length;
    this.dataRanking.notSatisfied = this.user?.rate.filter(x => x.satisfied === false).length;
  }

  private async uploadImg(): Promise<void> {
    await this.storage.deleteFilesFolder(this.user.photoRef);
    this.user.photoRef = `user-profile/${this.user.uniqueid}/foto/${this.filePhoto.name}`;
    await this.storage.upload(this.filePhoto, this.user.photoRef);
    await this.storage.getUrlFileInfo(this.user.photoRef).then((url) => this.user.photoUrl = url);
  }

}
