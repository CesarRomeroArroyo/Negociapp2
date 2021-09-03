import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPageRoutingModule } from './form-routing.module';

import { FormPage } from './form.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalsModule } from 'src/app/modals/modals.module';

import { InicioFacade } from '@pages/inicio/inicio.facade';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    ModalsModule,
    FormPageRoutingModule
  ],
  declarations: [FormPage],
  providers: [
    InicioFacade
  ]
})
export class FormPageModule {}
