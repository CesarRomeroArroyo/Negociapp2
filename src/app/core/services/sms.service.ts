import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FirebaseService } from './firebase.service';
import { Configurations } from '../../models/bd.models';

@Injectable({
  providedIn: 'root'
})
export class SmsService {

  public UrlSms: string;

  constructor(
    private http: HttpClient,
    private firebaseService: FirebaseService,
  ) { }

  public async fetchConfigurations(): Promise<Configurations> {
    const data = await this.firebaseService.obtenerPromise('configurations');
    this.UrlSms = data[0].sms;
    return data[0] as Configurations;
  }

  public sendSms(msg, phone): void {
    this.http.post(`${this.UrlSms}${phone}&SMSText=${msg}`, {}).subscribe((data) => {
      console.log(data);
    });
  }

}
