import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiderPageRoutingModule } from './mider-routing.module';

import { MiderPage } from './mider.page';

import { ComponentsModule } from '@components/components.module';
import { ModalsModule } from '@modals/modals.module';
import { LoadingModule } from '@ux/loading/loading.module';

import { HomeFacade } from '@app/home/home.facade';
import { InicioFacade } from '@pages/inicio/inicio.facade';

import { MiderFacade } from './mider.facade';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule,
    ModalsModule,
    MiderPageRoutingModule,
    LoadingModule
  ],
  declarations: [MiderPage],
  providers: [
    HomeFacade,
    InicioFacade,
    MiderFacade
  ]
})
export class MiderPageModule {}
