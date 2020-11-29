import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesModalComponent } from './categories-modal/categories-modal.component';
import { PhotosModalComponent } from './photos-modal/photos-modal.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const components = [
  CategoriesModalComponent,
  PhotosModalComponent,
];

@NgModule({
  declarations: components,
  imports: [
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule
  ],
  exports: components
})
export class ModalsModule { }
