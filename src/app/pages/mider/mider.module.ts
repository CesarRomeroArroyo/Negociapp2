import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiderPageRoutingModule } from './mider-routing.module';

import { MiderPage } from './mider.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalsModule } from 'src/app/modals/modals.module';
import { LoadingModule } from '../../ux/loading/loading.module';

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
  declarations: [MiderPage]
})
export class MiderPageModule {}
