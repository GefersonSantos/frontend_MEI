import { Component, OnInit } from '@angular/core';
import { Servico } from '../model/servico';
import { ServicoService } from '../services/servico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-servico',
  templateUrl: './inserir-servico.component.html',
  styleUrls: ['./inserir-servico.component.css']
})
export class InserirServicoComponent implements OnInit {
  codigo!: number;
  servico: Servico = new Servico();

  constructor(private servicoService: ServicoService, private router: Router) { }

  ngOnInit(): void {

  }

  retornar() {
    this.router.navigate(['listar-servico']);
  }

  onSubmit() {
    this.servico.codigo = 0;
    this.servicoService.incluirServico(this.servico).subscribe(data => {
      console.log(data);
      this.retornar();
    });
  }
}
