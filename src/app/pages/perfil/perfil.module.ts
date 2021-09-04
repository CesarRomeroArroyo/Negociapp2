import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { FormComponent } from './form/form.component';
import { RankingComponent } from './ranking/ranking.component';

import { LoadingModule } from '@ux/loading/loading.module';

import { ProfileFacade } from './perfil.facade';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PerfilPageRoutingModule,
    LoadingModule
  ],
  declarations: [
    PerfilPage,
    FormComponent,
    RankingComponent
  ],
  providers: [
    ProfileFacade
  ]
})
export class PerfilPageModule {}
