import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShehadatPageRoutingModule } from './shehadat-routing.module';

import { ShehadatPage } from './shehadat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ShehadatPageRoutingModule
  ],
  declarations: [ShehadatPage]
})
export class ShehadatPageModule { }
