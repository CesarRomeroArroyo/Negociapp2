import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiderPage } from './mider.page';

const routes: Routes = [
  {
    path: '',
    component: MiderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiderPageRoutingModule {}
