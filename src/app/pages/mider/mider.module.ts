import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiderPageRoutingModule } from './mider-routing.module';

import { MiderPage } from './mider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiderPageRoutingModule
  ],
  declarations: [MiderPage]
})
export class MiderPageModule {}
