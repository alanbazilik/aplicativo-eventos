import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelareventoPageRoutingModule } from './cancelarevento-routing.module';

import { CancelareventoPage } from './cancelarevento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancelareventoPageRoutingModule
  ],
  declarations: [CancelareventoPage]
})
export class CancelareventoPageModule {}
