import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FirebaseService } from './firebase.service';
import { Configurations } from 'src/app/models/data-base/bd.models';
import { ConfigurationsOnseSignal } from '../../models/data-base/bd.models';

@Injectable({
  providedIn: 'root'
})
export class OneSignalService {

  public apiIdOneSingal: string;
  public apiOnseSignal: string;
  public authorizationOnseSignal: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private firebaseService: FirebaseService,
  ) { }

  public async fetchConfigurations(): Promise<Configurations> {
    const data = await this.firebaseService.obtenerPromise('configurations')
    return data[0] as Configurations;
  }

  public async fetchOneSignalConfiguration(): Promise<ConfigurationsOnseSignal> {
    return await this.fetchConfigurations().then(x => {
      this.apiIdOneSingal = x.apiId_oneSingal;
      this.apiOnseSignal = x.api_onseSignal;
      this.authorizationOnseSignal = x.authorization_onseSignal;
      return {
        apiId_oneSingal: x.apiId_oneSingal,
        api_onseSignal: x.api_onseSignal,
        authorization_onseSignal: x.authorization_onseSignal,
        key_oneSignal: x.key_oneSignal,
      }
    })
  }

  sendDirectMessage(id, message, info?) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Basic ${this.authorizationOnseSignal}`
    });

    const options = { headers };
    const dataSend = JSON.stringify({
      app_id: this.apiIdOneSingal,
      contents: { en: message },
      include_player_ids: [id],
      data: { msgInfo: info }
    });
    this.http.post(`${this.apiOnseSignal}`, dataSend, options).subscribe((x) => {
      console.log(x);
    });
  }

  async redirectTo(data) {
    this.router.navigate([data.target]);
  }
}


