import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Agendamento } from '../model/agendamento';
import { AgendamentoService } from '../services/agendamento.service';

@Component({
  selector: 'app-alterar-agendamento',
  templateUrl: './alterar-agendamento.component.html',
  styleUrls: ['./alterar-agendamento.component.css']
})
export class AlterarAgendamentoComponent {

  codigo!: number;
  agendamento!: Agendamento;

  constructor(private AgendamentoService: AgendamentoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.codigo = this.route.snapshot.params['codigo'];
    this.agendamento = new Agendamento();
    this.AgendamentoService.consultarAgendamento(this.codigo).subscribe(data => {
      this.agendamento = data;
    });
  }

  retornar() {
    this.router.navigate(['listar-agendas']);
  }

  onSubmit(){
    this.AgendamentoService.alterarAgendamento(this.codigo, this.agendamento).subscribe( data => {
      console.log(data);
      this.retornar();
    });
  }


}
