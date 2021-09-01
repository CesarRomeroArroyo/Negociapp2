import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';
import { LoadingModule } from '../ux/loading/loading.module';

import { HomePage } from './home.page';

import { HomeFacade } from './home.facade';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
    LoadingModule
  ],
  declarations: [HomePage],
  providers: [
    HomeFacade
  ]
})
export class HomePageModule {}
