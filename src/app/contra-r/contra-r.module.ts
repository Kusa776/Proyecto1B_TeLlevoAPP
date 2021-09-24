import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContraRPageRoutingModule } from './contra-r-routing.module';

import { ContraRPage } from './contra-r.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ContraRPageRoutingModule
  ],
  declarations: [ContraRPage]
})
export class ContraRPageModule {}
