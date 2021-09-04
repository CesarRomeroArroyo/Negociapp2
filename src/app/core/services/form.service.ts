import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { FormsAbstract } from '@components/abstract/form.abstact';
import { User } from '@models/global/user.model';

import { FirebaseService } from './firebase.service';
import { OneSignalService } from './one-signal.service';

import { HomeFacade } from '../../home/home.facade';

@Injectable()
export class FormService extends FormsAbstract {

  constructor(
    private firebase: FirebaseService,
    private oneSignal: OneSignalService,
    private route: ActivatedRoute,
    private homeFacade: HomeFacade
  ) {
    super()
    this.category = this.route.snapshot.paramMap.get('category');
  }

  get user$(): Observable<User> { return this.homeFacade.getUser$ }

  sendNotification(
    cities: string[],
    categories: string[],
    typeService: string = null,
    itemUniqueid: string): void {
    this.user$.subscribe(async (user) => {
      const users: User[] = await this.firebase.obtenerPromise('usuario-app');
      const usersSendNotications: User[] = [];
      users.forEach(usuario => {
        if (usuario.uniqueid !== user.uniqueid) {
          cities?.forEach(city => {
            if (usuario[this.userMider].cities?.includes(city)) {
              categories?.forEach(category => {
                if (usuario[this.userMider].categories?.includes(category))
                  if (!usersSendNotications.includes(usuario))
                    usersSendNotications.push(usuario)
              })
            }
          });
          if (false)
            if (this.userMider === 'miders')
              if (this.category === this.service)
                if (usuario[this.userMider].typesService?.includes(typeService))
                  if (!usersSendNotications.includes(usuario))
                    usersSendNotications.push(usuario)
        }
      });
      usersSendNotications.forEach(x => {
        this.oneSignal.sendDirectMessage(
          x.onesignal,
          this.userMider === 'miders' ? `!Hay un nuevo servicio que concuerda con tus categorias!` :
            this.userMider === 'midera' ? `!Hay un nuevo Alquiler que concuerda con tus categorias!` :
              `!Hay un nuevo producto que concuerda con tus categorias!`,
          { target: `category/${this.category}/list-offers/offer-detail/${itemUniqueid}`, type: 'redirect' }
        );
      })
    })
  }

}

