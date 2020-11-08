import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotifictionsPage } from './notifictions.page';

const routes: Routes = [
  {
    path: '',
    component: NotifictionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotifictionsPageRoutingModule {}
