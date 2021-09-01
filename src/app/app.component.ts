import { Component, OnInit } from '@angular/core';
import { Plugins, StatusBarStyle } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Router } from '@angular/router';

import { OneSignalService } from './core/services/one-signal.service';
import { FirebaseService } from './core/services/firebase.service';
import { User } from './models/global/user.model';
import { SmsService } from './core/services/sms.service';
import { LOCALSTORAGE } from './constans/localStorage';
import { HomeFacade } from './home/home.facade';
const { Device } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private oneSignal: OneSignal,
    private platform: Platform,
    private router: Router,
    private oneSignalService: OneSignalService,
    private smsService: SmsService,
    private firebaseService: FirebaseService,
    private homeFacade: HomeFacade
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    const device = await Device.getInfo();
    await this.oneSignalService.fetchConfigurations();
    await this.smsService.fetchConfigurations();
    const { apiId_oneSingal, key_oneSignal } = await this.oneSignalService.fetchOneSignalConfiguration();

    localStorage.setItem('NEGOCIAPP_UINIQUEID', device.uuid);
    this.oneSignal.startInit(apiId_oneSingal, key_oneSignal);
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    this.oneSignal.handleNotificationReceived().subscribe(() => {
    });

    this.oneSignal.handleNotificationOpened().subscribe((data) => {
      if (data.notification.payload.additionalData && data.notification.payload.additionalData.msgInfo) {
        const info = data.notification.payload.additionalData.msgInfo;
        if (info.type === 'redirect') { this.oneSignalService.redirectTo(info); }
      }
    });

    this.oneSignal.getIds().then(info => {
      localStorage.setItem('NEGOCIAPP_ONESIGNALUI', JSON.stringify(info.userId));
    });

    this.oneSignal.endInit();
    await this.fetchUser();
  }

  async initializeApp() {
    const { SplashScreen, StatusBar } = Plugins;
    try {
      await SplashScreen.hide();
      await StatusBar.setStyle({ style: StatusBarStyle.Light });
      if (this.platform.is('android')) {
        StatusBar.setBackgroundColor({ color: '#2449f2' });
      }
    } catch (err) {
      console.log('This is a normal Browser', err);
    }
    this.platform.backButton.subscribe(() => {
      if (this.router.url === '/inicio') {
        // tslint:disable-next-line: no-string-literal
        navigator['app'].exitApp();
      }
    });
  }

  public async fetchUser(): Promise<void> {
    let user = JSON.parse(localStorage.getItem(LOCALSTORAGE.USER));
    console.log(user);
    if (user) {
      const users: User[] = await this.firebaseService.obtenerPromise('usuario-app');
      const dataUser = users.filter(x => x?.uniqueid === user?.uniqueid)
      user = dataUser[0];
      localStorage.setItem(LOCALSTORAGE.USER, JSON.stringify(user));
      const logged = JSON.parse(localStorage.getItem(LOCALSTORAGE.LOGGED));
      if (logged) {
        this.homeFacade.userAlreadylogged();
      }
    }

  }

}