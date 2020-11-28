import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';

const components = [
  HeaderComponent
];

@NgModule({
  declarations: components,
  imports: [
    IonicModule,
    RouterModule,
    CommonModule
  ],
  exports: components
})
export class ComponentsModule { }
