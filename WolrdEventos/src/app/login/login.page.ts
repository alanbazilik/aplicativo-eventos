import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticationServiceService } from '../api/authentication-service.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public toastController: ToastController, private route: Router, private loginservice:AuthenticationServiceService,public alertController: AlertController) { }
  logins = {
    email: '',
    senha: ''
  };
  logins_crad:any = []
  ngOnInit() {
  }

  login(){
    if(this.logins.email  && this.logins.senha){
      this.loginservice.savelogins(this.logins).subscribe(res => {
        this.route.navigateByUrl('/home');
        this.presentToast('Seja Bem Vindo!', 'success');
      
      })
      
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
