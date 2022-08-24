import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadrastroLoginPageRoutingModule } from './cadrastro-login-routing.module';

import { CadrastroLoginPage } from './cadrastro-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadrastroLoginPageRoutingModule
  ],
  declarations: [CadrastroLoginPage]
})
export class CadrastroLoginPageModule {}
