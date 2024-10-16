import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servico } from '../model/servico';

@Injectable({
  providedIn: 'root'
})

export class ServicoService {

  private url = "http://localhost:8080/servicos";

  constructor(private httpClient: HttpClient) { }

  //Listar 
  listarServicos(): Observable<Servico[]> {
    return this.httpClient.get<Servico[]>(`${this.url}`);
  }


  //Incluir
  incluirServico(servico: Servico): Observable<Object> {
    return this.httpClient.post(`${this.url}`, servico);
  }

  //Alterar
  alterarServico(codigo :number, servico: Servico): Observable<Object> {
    return this.httpClient.put(`${this.url}/${codigo}`, servico);
  }

  //Excluir
  excluirServico(codigo: number): Observable<Object> {
    return this.httpClient.delete(`${this.url}/${codigo}`);
  }

  //Consultar
  consultarServico(codigo: number): Observable<Servico> {
    return this.httpClient.get<Servico>(`${this.url}/${codigo}`);
  }
}
