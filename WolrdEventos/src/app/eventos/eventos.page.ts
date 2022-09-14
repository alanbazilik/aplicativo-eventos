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
  imagemBase64String: any = [];
  image: any = [];
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
  onUploadImage(evt: any) {
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoadedReceita.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  handleReaderLoadedReceita(e: any) {
    this.imagemBase64String = 'data:image/png;base64,' + btoa(e.target.result);
    console.log(this.imagemBase64String)
    this.Eventos.image = this.imagemBase64String;

    
  }
}
