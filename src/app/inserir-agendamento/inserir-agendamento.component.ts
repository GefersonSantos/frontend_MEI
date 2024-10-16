import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Agendamento } from '../model/agendamento';
import { AgendamentoService } from '../services/agendamento.service';

@Component({
  selector: 'app-inserir-agenda',
  templateUrl: './inserir-agendamento.component.html',
  styleUrls: ['./inserir-agendamento.component.css']
})
export class InserirAgendamentoComponent {

  codigo!: number;
  agendamento: Agendamento = new Agendamento();
  
  constructor(private AgendamentoService: AgendamentoService, private router: Router) { }

  ngOnInit(): void {

  }

  retornar() {
    this.router.navigate(['listar-agendas']);
  }

  onSubmit(){
    this.agendamento.codigo = 0;
    this.AgendamentoService.incluirAgendamento(this.agendamento).subscribe( data => {
      console.log(data);
      this.retornar();
    });
  }


}
