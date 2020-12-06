import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPage } from './form.page';

const routes: Routes = [
  {
    path: '',
    component: FormPage
  },
  {
    path: 'offers/:uniqueid/:index',
    loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule)
  },
  {
    path: 'offer-detail/:uniqueid/:index',
    loadChildren: () => import('./offer-detail/offer-detail.module').then( m => m.OfferDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPageRoutingModule {}
