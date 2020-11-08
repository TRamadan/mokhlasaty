import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyvisionPageRoutingModule } from './companyvision-routing.module';

import { CompanyvisionPage } from './companyvision.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyvisionPageRoutingModule
  ],
  declarations: [CompanyvisionPage]
})
export class CompanyvisionPageModule {}
