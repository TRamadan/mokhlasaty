import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HighercertPage } from './highercert.page';

const routes: Routes = [
  {
    path: '',
    component: HighercertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HighercertPageRoutingModule {}
