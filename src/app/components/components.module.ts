import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { HeaderComponent } from './header/header.component';
import { MideraComponent } from './configuracion/midera/midera.component';
import { FormComponent } from './form/form.component';
import { MycardsComponent } from './mycards/mycards.component';
import { OffersReceivedComponent } from './offers-received/offers-received.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { MenuComponent } from './menu/menu.component';
import { KeyboardComponent } from './keyboard/keyboard.component';

const components = [
  HeaderComponent,
  MideraComponent,
  FormComponent,
  MycardsComponent,
  OffersReceivedComponent,
  CardDetailComponent,
  MenuComponent,
  KeyboardComponent
];

@NgModule({
  declarations: components,
  imports: [
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TextMaskModule
  ],
  exports: components
})
export class ComponentsModule { }
