import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { EventosService } from '../api/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {
  Eventos = {
    Name:'',
    desquicao_evento:'',
    Valor:'',
    Local:'',
    Data:'',
    quantidade:'',
    image:'',
    Curtir:''
  }
  Eventos_crad:any = []
  constructor(public toastController: ToastController, private route: Router, private EventosService:EventosService,public alertController: AlertController) { }

  ngOnInit() {
  }
  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      message: "Evento cadastrado",
    });

    await alert.present();
  }
  EventosCrads(){
    this.EventosService.saveEventos(this.Eventos).subscribe(res => {
      this.presentAlertMultipleButtons()
      
    })
  }
}
