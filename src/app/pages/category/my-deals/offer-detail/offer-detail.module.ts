import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferDetailPageRoutingModule } from './offer-detail-routing.module';

import { OfferDetailPage } from './offer-detail.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule,
    OfferDetailPageRoutingModule
  ],
  declarations: [OfferDetailPage]
})
export class OfferDetailPageModule {}
