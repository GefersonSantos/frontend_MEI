import { Component } from '@angular/core';
import { Servico } from '../model/servico';
import { ServicoService } from '../services/servico.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-servico',
  templateUrl: './editar-servico.component.html',
  styleUrls: ['./editar-servico.component.css']
})
export class EditarServicoComponent {
  codigo!: number;
  servico!: Servico;

  constructor(private serviceService: ServicoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.codigo = this.activatedRoute.snapshot.params['codigo'];
    this.servico = new Servico();
    this.serviceService.consultarServico(this.codigo).subscribe(data => {
      this.servico = data;
    });
  }

  retornar(): void {
    this.router.navigate(['listar-servicos']);
  }

  onSubmit() {
    this.serviceService.alterarServico(this.codigo, this.servico).subscribe(data => {
      console.log(data);
      this.retornar();
    })
  }
}
