import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BienvenidaPageRoutingModule } from './bienvenida-routing.module';
import { LoadingModule } from '../../ux/loading/loading.module';

import { BienvenidaPage } from './bienvenida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienvenidaPageRoutingModule,
    LoadingModule,
    RouterModule
  ],
  declarations: [BienvenidaPage]
})
export class BienvenidaPageModule {}
