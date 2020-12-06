import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyDealsPage } from './my-deals.page';

const routes: Routes = [
  {
    path: '',
    component: MyDealsPage
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
export class MyDealsPageRoutingModule {}
