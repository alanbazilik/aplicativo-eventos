import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventoslistPageRoutingModule } from './eventoslist-routing.module';

import { EventoslistPage } from './eventoslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventoslistPageRoutingModule
  ],
  declarations: [EventoslistPage]
})
export class EventoslistPageModule {}
