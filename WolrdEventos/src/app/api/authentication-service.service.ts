import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  urlApi = "http://127.0.0.1:8000/api";
  constructor(private http: HttpClient) { }

  getlogins(){
    return this.http.get(`${this.urlApi}/Logins`);
    }
    savelogins(Logins){
      return this.http.post(`${this.urlApi}/Logins`,Logins);
  
    }

}
