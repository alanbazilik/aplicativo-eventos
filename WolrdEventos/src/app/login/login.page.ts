import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  senha: string;
  constructor(public toastController: ToastController, private route: Router) { }

  ngOnInit() {
  }
  login(){
    if(this.email && this.senha){
      this.route.navigateByUrl('/home');
      this.presentToast('Seja Bem Vindo!', 'success');
    }else{
      this.presentToast('Erro, Usuário  ou Senha Inválidos!', 'danger');
    }
  }

  async presentToast(texto: string, color: string){
      const toast = await this.toastController.create({
        message: ''+texto,
        duration: 2000
      });
      toast.present();
    }
}
