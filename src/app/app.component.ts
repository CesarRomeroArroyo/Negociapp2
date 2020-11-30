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
export class AppComponent  implements OnInit  {

  public appPages = [
    {
      title: 'Mis datos',
      url: '/perfil',
      icon: '/assets/btn-profile_white.svg',
      class: 'profile-icon'
    },
    {
      title: 'Configuracion MIDER',
      url: '/mider',
      icon: '/assets/btn-menu_conf.svg',
      class: 'config-icon'
    }
  ];

  constructor(
    private oneSignal: OneSignal,
    private platform: Platform,
    private router: Router,
    private oneSignalService: OneSignalService
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    const {SplashScreen, StatusBar } = Plugins;
    try {
      await SplashScreen.hide();
      await StatusBar.setStyle({style: StatusBarStyle.Light});
      if(this.platform.is('android')){
        StatusBar.setBackgroundColor({color: '#2449f2'});
      }
    } catch(err){
      console.log('This is a normal Browser', err);
    }
    this.platform.backButton.subscribe(() => {
      if (this.router.url === '/inicio') {
        navigator['app'].exitApp();
      }
    });
  }

  async ngOnInit() {
    console.log('Initializing HomePage');
    const device = await Device.getInfo();
    localStorage.setItem('NEGOCIAPP_UINIQUEID', device.uuid);
    this.oneSignal.startInit('d32974fc-eac0-416d-a22d-b2b4996d28fe', '95147562311');
			this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
			this.oneSignal.handleNotificationReceived().subscribe(() => {
				// do something when notification is received
			});

			this.oneSignal.handleNotificationOpened().subscribe((data) => {
				// do something when a notification is opened
        // Concentrarse en este metodo.
        console.log(data);
        if(data.notification.payload.additionalData && data.notification.payload.additionalData.msgInfo){
          const info = data.notification.payload.additionalData.msgInfo;
          if(info.type ==='redirect'){
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