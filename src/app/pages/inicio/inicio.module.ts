import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { ComponentsModule } from 'src/app/components/components.module';

import { InicioFacade } from './inicio.facade';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    InicioPageRoutingModule
  ],
  declarations: [InicioPage],
  providers: [
    InicioFacade
  ]
})
export class InicioPageModule {}
