import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadrastroLoginPage } from './cadrastro-login.page';

const routes: Routes = [
  {
    path: '',
    component: CadrastroLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadrastroLoginPageRoutingModule {}
