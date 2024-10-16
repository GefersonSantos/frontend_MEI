import { Component, OnInit } from '@angular/core';
import { Servico } from '../model/servico';
import { ServicoService } from '../services/servico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-servicos',
  templateUrl: './listar-servico.component.html',
  styleUrls: ['./listar-servico.component.css']
})
export class ListarServicoComponent implements OnInit{

  servicos!: Servico[];

  constructor(private servicoService: ServicoService, private router: Router) { }

  ngOnInit(): void {
      this.listarServico();
  }

  private listarServico() {
    this.servicoService.listarServico().subscribe(data => {
      this.servicos = data;
    });
  }

  excluirServico(codigo: number) {
    if(confirm("Deseja realmente excluir?")){
      this.servicoService.excluirServico(codigo).subscribe(data => {
        console.log(data);
        this.listarServico();
      })
    }
  }

  incluirServico() {
    this.router.navigate(['inserir-servico']);
  }

  alterarServico(codigo: number) {
    this.router.navigate(['editar-servico', codigo]);
  }

  retornar() {
    this.router.navigate(['inicio']);
  }

}
