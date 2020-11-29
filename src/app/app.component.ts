import { Component } from '@angular/core';
import { Plugins, StatusBarStyle } from '@capacitor/core';
import { Platform } from '@ionic/angular';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

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
    private platform: Platform
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    const { SplashScreen, StatusBar } = Plugins;
    try {
      await SplashScreen.hide();
      await StatusBar.setStyle({ style: StatusBarStyle.Light });
      if (this.platform.is('android')) {
        StatusBar.setBackgroundColor({ color: '#CDCDCD' });
      }
    } catch (err) {
      console.log('This is a normal Browser', err);
    }
  }
}