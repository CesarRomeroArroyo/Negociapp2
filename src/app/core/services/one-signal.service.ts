import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment as ENV } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OneSignalService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  sendDirectMessage(id, message, info?) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Basic ${ENV.authorization_onseSignal}`
    });

    const options = { headers };
    const dataSend = JSON.stringify({
      app_id: `${ENV.apiId_oneSingal}`,
      contents: { en: message },
      include_player_ids: [id],
      data: { msgInfo: info }
    });

    this.http.post(`${ENV.api_onseSignal}`, dataSend, options).subscribe((data) => {
      console.log(data);
    });
  }

  async redirectTo(data) {
    this.router.navigate([data.target]);
  }
}
