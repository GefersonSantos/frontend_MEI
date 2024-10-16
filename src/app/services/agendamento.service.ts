import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agendamento } from '../model/agendamento';

@Injectable({
  providedIn: 'root'
})

export class AgendamentoService {

  private url = "http://localhost:8080/agendas";

  constructor(private httpClient: HttpClient) { }

  //Listar as marcas a partir da chamada do método API REST que está contido na URL especificada
  listarAgendamentos(): Observable<Agendamento[]> {
    return this.httpClient.get<Agendamento[]>(`${this.url}`);
  }

  //Servico para consulta da marca
  consultarAgendamento(codigo: number): Observable<Agendamento> {
    return this.httpClient.get<Agendamento>(`${this.url}/${codigo}`);
  }

  //Incluir marca
  incluirAgendamento(agendamento: Agendamento): Observable<Object> {
    return this.httpClient.post(`${this.url}`, agendamento);
  }

  //Alterar marca
  alterarAgendamento(codigo :number, agendamento: Agendamento): Observable<Object> {
    return this.httpClient.put(`${this.url}/${codigo}`, agendamento);
  }

  //Excluir
  excluirAgendamento(codigo: number): Observable<Object> {
    return this.httpClient.delete(`${this.url}/${codigo}`);
  }
}
