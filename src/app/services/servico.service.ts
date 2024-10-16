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
  listarServico(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }


  //Incluir
  incluirServico(dados: Servico): Observable<Object> {
    return this.httpClient.post(this.url, dados);
  }

  //Alterar
  alterarServico(codigo: number, dados: Servico): Observable<Object> {
    return this.httpClient.put(`${this.url}/${codigo}`, dados);
  }

  //Excluir
  excluirServico(codigo: number): Observable<Object> {
    return this.httpClient.delete(`${this.url}/${codigo}`);
  }

  //Consultar
  consultarServico(codigo: number): Observable<any> {
    return this.httpClient.get(`${this.url}/${codigo}`);
  }
}
