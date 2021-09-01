import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmsPageRoutingModule } from './sms-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { LoadingModule } from '../../ux/loading/loading.module';

import { SmsPage } from './sms.page';

import { HomeFacade } from '../home.facade';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmsPageRoutingModule,
    ComponentsModule,
    LoadingModule
  ],
  declarations: [SmsPage],
  providers: [
    HomeFacade
  ]
})
export class SmsPageModule {}
