import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfferitPage } from './offerit.page';

const routes: Routes = [
  {
    path: '',
    component: OfferitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferitPageRoutingModule {}
