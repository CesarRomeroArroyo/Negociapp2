import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormsAbstract } from 'src/app/components/abstract/form.abstact';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from './firebase.service';
import { OneSignalService } from './one-signal.service';

@Injectable()
export class FormService extends FormsAbstract {

  constructor(
    private firebase: FirebaseService,
    private oneSignal: OneSignalService,
    private route: ActivatedRoute) {
    super()
    this.category = this.route.snapshot.paramMap.get('category');
  }

  async sendNotification(
    cities: string[],
    categories: string[],
    typeService: string = null,
    itemUniqueid: string): Promise<void> {
    const users: User[] = await this.firebase.obtenerPromise('usuario-app');
    const usersSendNotications: User[] = [];
    users.forEach(usuario => {
      if (usuario.uniqueid !== this.user.uniqueid) {
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
    usersSendNotications.forEach(user => {
      this.oneSignal.sendDirectMessage(
        user.onesignal,
        this.userMider === 'miders' ? `!Hay un nuevo servicio que concuerda con tus categorias!` :
          this.userMider === 'midera' ? `!Hay un nuevo Alquiler que concuerda con tus categorias!` :
            `!Hay un nuevo producto que concuerda con tus categorias!`,
        { target: `category/${this.category}/list-offers/offer-detail/${itemUniqueid}`, type: 'redirect' }
      );
    })
  }

}

