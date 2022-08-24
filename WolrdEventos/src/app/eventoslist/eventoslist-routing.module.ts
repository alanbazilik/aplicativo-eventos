import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventoslistPage } from './eventoslist.page';

const routes: Routes = [
  {
    path: '',
    component: EventoslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventoslistPageRoutingModule {}
