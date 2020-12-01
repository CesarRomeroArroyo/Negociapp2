import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferitPageRoutingModule } from './offerit-routing.module';

import { OfferitPage } from './offerit.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule,
    TextMaskModule,
    OfferitPageRoutingModule
  ],
  declarations: [OfferitPage]
})
export class OfferitPageModule {}
