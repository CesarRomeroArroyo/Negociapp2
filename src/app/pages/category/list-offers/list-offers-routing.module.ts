import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOffersPage } from './list-offers.page';

const routes: Routes = [
  {
    path: '',
    component: ListOffersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOffersPageRoutingModule {}
