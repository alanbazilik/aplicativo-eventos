import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelareventoPage } from './cancelarevento.page';

const routes: Routes = [
  {
    path: '',
    component: CancelareventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancelareventoPageRoutingModule {}
