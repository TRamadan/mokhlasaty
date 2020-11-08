import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FwateerPage } from './fwateer.page';

const routes: Routes = [
  {
    path: '',
    component: FwateerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FwateerPageRoutingModule {}
