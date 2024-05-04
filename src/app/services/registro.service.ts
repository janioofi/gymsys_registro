import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Registro } from '../models/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  url: string = `${ API_CONFIG.baseUrl }/acesso`;

  constructor(private http: HttpClient) { }

  registroEntrada(cpf: Registro) {
    return this.http.post(`${this.url}/entrada`, cpf);
  }

  registroSaida(cpf: Registro) {
    return this.http.post(`${this.url}/saida`, cpf);
  }
}
