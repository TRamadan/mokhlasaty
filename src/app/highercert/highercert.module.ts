import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HighercertPageRoutingModule } from './highercert-routing.module';

import { HighercertPage } from './highercert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HighercertPageRoutingModule
  ],
  declarations: [HighercertPage]
})
export class HighercertPageModule {}
