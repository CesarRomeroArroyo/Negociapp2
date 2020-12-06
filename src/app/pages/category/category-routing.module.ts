import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryPage } from './category.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryPage
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'form/:idunique',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'list-offers',
    loadChildren: () => import('./list-offers/list-offers.module').then( m => m.ListOffersPageModule)
  },
  {
    path: 'my-deals',
    loadChildren: () => import('./my-deals/my-deals.module').then( m => m.MyDealsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryPageRoutingModule {}
