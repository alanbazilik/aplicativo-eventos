import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../api/authentication-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private loginservice:AuthenticationServiceService,public alertController: AlertController) { }
  logins = {
    name: '',
    sobrenome: '',
    sexo: '',
    email: '',
    password: '',
    telefone: '',
    Endereco: '',
    cpf: ''
  };
  logins_crad:any = []
  ngOnInit() {
  }
  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      message: "login cadastrado",
    });

    await alert.present();
  }
registar(){
  this.loginservice.savelogins(this.logins).subscribe(res => {
    this.presentAlertMultipleButtons()
    
  })

}

}
