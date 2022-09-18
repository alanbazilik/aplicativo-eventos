import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  urlApi = "http://127.0.0.1:8000/api";
  constructor(private http: HttpClient) { }

  getEventos(){
    return this.http.get(`${this.urlApi}/Eventos`);
    }
    saveEventos(Eventos){
      return this.http.post(`${this.urlApi}/Eventos`,Eventos);
  
    }

}
