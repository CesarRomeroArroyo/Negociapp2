import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOffersPage } from './list-offers.page';

const routes: Routes = [
  {
    path: '',
    component: ListOffersPage
  },
  {
    path: 'offer-detail/:uniqueid',
    loadChildren: () => import('./offer-detail/offer-detail.module').then( m => m.OfferDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOffersPageRoutingModule {}
