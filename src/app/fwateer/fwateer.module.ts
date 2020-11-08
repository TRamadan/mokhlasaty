import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FwateerPageRoutingModule } from './fwateer-routing.module';

import { FwateerPage } from './fwateer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FwateerPageRoutingModule
  ],
  declarations: [FwateerPage]
})
export class FwateerPageModule {}
