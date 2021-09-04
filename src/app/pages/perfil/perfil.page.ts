import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import Swal from 'sweetalert2';

import { FormsAbstract } from '@components/abstract/form.abstact';
import { Ranking } from '@models/perfil.models';

import { FirebaseService } from '@core/services/firebase.service';
import { FileManagerService } from '@core/services/file-manager.service';

import { User } from '@models/global/user.model';
import { SelectType } from '@models/home/select-type';
import { COLLECTIONS_BD } from '@models/data-base/bd.models';

import { HomeFacade } from '@app/home/home.facade';
import { ProfileFacade } from './perfil.facade';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage extends FormsAbstract implements OnInit {

  public cities: SelectType[] = [];
  public stars = [5, 4, 3, 2, 1];
  public promedio: number;
  public tab: number = 1;
  public dataRanking: Ranking = { allBussiness: 0, recommended: 0, notRecommended: 0, satisfied: 0, notSatisfied: 0, };
  public filePhoto: File = null;
  public subscriptions: Subscription[] = [];
  public user: User;


  constructor(
    private route: ActivatedRoute,
    private firebase: FirebaseService,
    private _location: Location,
    private storage: FileManagerService,
    private homeFacade: HomeFacade,
    private profileFacade: ProfileFacade
  ) { super(); }

  public async ngOnInit() {
    this.cities = await this.firebase.obtenerPromise(COLLECTIONS_BD.CITIES);
    if (this.isOtherUser) {
      // Other user
      const user = await this.firebase.obtenerUniqueIdPromise('usuario-app', this.uniqueid);
      this.user = user[0];
    } else {
      // My user
      this.subscriptions.push(
        this.user$.subscribe(user => {
          this.user = user;
        })
      );
    }
    this.getDataRanking();
    this.promedio = this.starsPromedio();
  }

  ionViewDidLeave(): void {
    this.subscriptions?.forEach(subscription => {
      subscription?.unsubscribe();
    });
  }

  get user$(): Observable<User> {
    return this.homeFacade.getUser$;
  }

  get userImg(): string {
    return this.user?.photoUrl?.length > 0 ? this.user?.photoUrl : 'assets/img/user_perfilxxxhdpi.png';
  }

  get isOtherUser(): boolean {
    this.uniqueid = this.route.snapshot.paramMap.get('uniqueid');
    return this.uniqueid ? true : false;
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
    const userData = {
      ...this.user,
      ...event.value
    }
    this.profileFacade.updateUser(userData);
  }

  public starsPromedio(): number {
    let accumulator = 0;
    let quantity = 0;
    this.user?.rate?.forEach(item => {
      quantity++;
      accumulator = accumulator + item.service;
    });
    const promedio = accumulator / quantity;
    return promedio;
  }

  public getDataRanking(): void {
    this.subscriptions.push(
      this.user$.subscribe(user => {
        this.dataRanking.allBussiness = user?.rate?.length;
        this.dataRanking.recommended = user?.rate?.filter(x => x.recommend === true).length;
        this.dataRanking.notRecommended = user?.rate?.filter(x => x.recommend === false).length;
        this.dataRanking.satisfied = user?.rate?.filter(x => x.satisfied === true).length;
        this.dataRanking.notSatisfied = user?.rate?.filter(x => x.satisfied === false).length;
      })
    );
  }

  private async uploadImg(): Promise<void> {
    if (this.user.photoRef) {
      this.storage.deleteFilesFolder(this.user.photoRef);
    }
    this.user.photoRef = `user-profile/${this.user.uniqueid}/foto/${this.filePhoto.name}`;
    await this.storage.upload(this.filePhoto, this.user.photoRef);
    await this.storage.getUrlFileInfo(this.user.photoRef).then((url) => this.user.photoUrl = url);
  }

}
