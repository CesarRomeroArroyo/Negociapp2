import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOffersPageRoutingModule } from './list-offers-routing.module';

import { ListOffersPage } from './list-offers.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ListOffersPageRoutingModule
  ],
  declarations: [ListOffersPage]
})
export class ListOffersPageModule {}
