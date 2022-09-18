import { Component, OnInit } from '@angular/core';
import { AvaliarsService } from '../api/avaliars.service';

@Component({
  selector: 'app-avaliar',
  templateUrl: './avaliar.page.html',
  styleUrls: ['./avaliar.page.scss'],
})
export class AvaliarPage implements OnInit {
  Avaliar = {
    nome: '',
    messagem: '',
    nota: ''
  };
  Avaliar_crad: any = []
  constructor(private AvaliarsService: AvaliarsService) { }

  ngOnInit() {
  }
  avaliar(numbers) {
    this.Avaliar.nota = numbers
    
      }
      salvar() {
        this.AvaliarsService.saveAvaliar(this.Avaliar).subscribe(res => {
          console.log("Avalição Salvar");
        })
      }

}
