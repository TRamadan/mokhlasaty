import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyvisionPage } from './companyvision.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyvisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyvisionPageRoutingModule {}
