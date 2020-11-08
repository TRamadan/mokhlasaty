import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeqabatPage } from './neqabat.page';

const routes: Routes = [
  {
    path: '',
    component: NeqabatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeqabatPageRoutingModule {}
