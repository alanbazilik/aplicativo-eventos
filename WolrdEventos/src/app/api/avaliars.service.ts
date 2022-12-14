import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvaliarsService {
  urlApi = "http://127.0.0.1:8000/api";
  constructor(private http: HttpClient) { }

  getAvaliar(){
    return this.http.get(`${this.urlApi}/Avaliar`);
    }
    saveAvaliar(avaliar){
      return this.http.post(`${this.urlApi}/avaliar`, avaliar);
  
    }
}
