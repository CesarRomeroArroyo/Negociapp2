import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment as ENV } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { ComponentsModule } from './components/components.module';

import { State } from './store/state/state';
import { globalReducers } from './store/reducers/index-global-reducers';

import { MetaReducer, StoreModule } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const REDUCER_TOKEN = new InjectionToken('Registered Reducers');
export const metaReducers: MetaReducer<State>[] = !ENV.production ? [] : [storeFreeze];

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(ENV.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    StoreModule.forRoot(REDUCER_TOKEN, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !ENV.production,
      autoPause: true,
    })
  ],
  providers: [
    {
      provide: REDUCER_TOKEN,
      useValue: globalReducers
    },
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    AngularFireAuth,
    OneSignal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
