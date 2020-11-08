import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifictionsPageRoutingModule } from './notifictions-routing.module';

import { NotifictionsPage } from './notifictions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotifictionsPageRoutingModule
  ],
  declarations: [NotifictionsPage]
})
export class NotifictionsPageModule {}
