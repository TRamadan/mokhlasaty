import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AhwalPage } from './ahwal.page';

const routes: Routes = [
  {
    path: '',
    component: AhwalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AhwalPageRoutingModule {}
