import { Component, OnInit } from '@angular/core';
import { Plugins, StatusBarStyle } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Router } from '@angular/router';
import { OneSignalService } from './core/services/one-signal.service';
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
    private oneSignalService: OneSignalService
  ) {
    this.initializeApp();
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

  async ngOnInit() {
    const device = await Device.getInfo();
    localStorage.setItem('NEGOCIAPP_UINIQUEID', device.uuid);
    this.oneSignal.startInit('d32974fc-eac0-416d-a22d-b2b4996d28fe', '95147562311');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    this.oneSignal.handleNotificationReceived().subscribe(() => {
    });

    /* Asi se debe enviar los mensajes
    this.oneSignal.sendDirectMessage(
                user.onesignal,
                'Hay un nuevo servicio que concuerda con tus categorias.',
                { idunico, target: 'request-services', type: 'redirect' }
              );
              user.onesignal: One signal del usuario al que le llegara la notificacion
              message
              idunico: uniqueid del item,
              target: 'ruta a la que llevar,
              type: redirect,
    */

    this.oneSignal.handleNotificationOpened().subscribe((data) => {
      if (data.notification.payload.additionalData && data.notification.payload.additionalData.msgInfo) {
        const info = data.notification.payload.additionalData.msgInfo;
        console.log(info);
        if (info.type === 'redirect') {
          this.oneSignalService.redirectTo(info);
        }
      }
    });

    this.oneSignal.getIds().then(info => {
      localStorage.setItem('NEGOCIAPP_ONESIGNALUI', JSON.stringify(info.userId));
    });

    this.oneSignal.endInit();
  }
}