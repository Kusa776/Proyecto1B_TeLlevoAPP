import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoliPageRoutingModule } from './soli-routing.module';

import { SoliPage } from './soli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoliPageRoutingModule
  ],
  declarations: [SoliPage]
})
export class SoliPageModule {}
