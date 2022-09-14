import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { EventosService } from '../api/eventos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventoslist',
  templateUrl: './eventoslist.page.html',
  styleUrls: ['./eventoslist.page.scss'],
})
export class EventoslistPage implements OnInit {
  Eventos = {
    Curtir:''
  
  }
  eventos: any = [];
  imagemBase64String: any = [];
  image: any = [];
  Eventos_crad:any = []
  constructor(public toastController: ToastController, private route: Router, private EventosService:EventosService,public alertController: AlertController) { }

  ngOnInit() {
    this.list()
  }
   curtir = 1;
  EventosCrads(item){
    this.EventosService.saveEventoscradcurtir(item).subscribe(res => {
      this.curtir+this.Eventos.Curtir
      
    })
  }
  list(){
    this.EventosService.getEventos().subscribe(res => {
      this.eventos = res
      console.log(res)
    });
}
}
