import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeqabatPageRoutingModule } from './neqabat-routing.module';

import { NeqabatPage } from './neqabat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeqabatPageRoutingModule
  ],
  declarations: [NeqabatPage]
})
export class NeqabatPageModule {}
