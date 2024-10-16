import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agendamento } from '../model/agendamento';
import { AgendamentoService } from '../services/agendamento.service';


@Component({
  selector: 'app-lista-agendas',
  templateUrl: './listar-agendas.component.html',
  styleUrls: ['./listar-agendas.component.css']
})
export class ListarAgendasComponent implements OnInit {


  agendas!: Agendamento[];

  constructor(private AgendamentoService: AgendamentoService, private router: Router) { }

  ngOnInit(): void {

    this.listarAgendas();

  }

  //Chama o serviço para a listagem das marcas
  private listarAgendas() {
    this.AgendamentoService.listarAgendamentos().subscribe(data => {
      this.agendas = data;
    });
  }

  excluirAgendamento(codigo: number) {
    if (confirm("Deseja excluir a Agenda?")) {
      this.AgendamentoService.excluirAgendamento(codigo).subscribe(data => {
        console.log(data);
        this.listarAgendas();
      })
    }
  }
  
  inserirAgendamento() {
    this.router.navigate(['inserir-agendamento'])
  }

  alterarAgendamento(codigo: number) {
    this.router.navigate(['alterar-agendamento', codigo])
  }

  consultarAgendamento(codigo: number) {
    this.router.navigate(['consultar-agendamento', codigo])
  }
// consultarEquipamento(codigo: number) {
//   this.router.navigate(['consultar-equipamento', codigo])
// }

retornar() {
  this.router.navigate(['inicio'])
}
}
