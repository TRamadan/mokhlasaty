import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShehadatPageRoutingModule } from './shehadat-routing.module';

import { ShehadatPage } from './shehadat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShehadatPageRoutingModule
  ],
  declarations: [ShehadatPage]
})
export class ShehadatPageModule {}
