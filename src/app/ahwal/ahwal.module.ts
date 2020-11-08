import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AhwalPageRoutingModule } from './ahwal-routing.module';

import { AhwalPage } from './ahwal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AhwalPageRoutingModule
  ],
  declarations: [AhwalPage]
})
export class AhwalPageModule {}
