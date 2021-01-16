import { HistoricoService } from './../historico.service.ts.service';
import { Component, OnInit } from '@angular/core';
//import { Usuario, Historico } from './../../../../types';
import { Router, RouterLink } from '@angular/router';
import { Historico } from './historico.model'


@Component({
  selector: 'app-historico-pesquisar',
  templateUrl: './historico-pesquisar.component.html',
  styleUrls: ['./historico-pesquisar.component.css']
})
export class HistoricoPesquisarComponent implements OnInit {

    historico: Historico = {
    combustivel: '',
    data: '',
     
  

     
  }

  constructor(private HistoricoService: HistoricoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createHistorico(): void{
    this.HistoricoService.create(this.historico).subscribe(() =>{
    

    this.HistoricoService.showMessage('Operação bem sucedida')
    this.router.navigate(['/'])
  })
}
  cancel(): void {
    this.HistoricoService.showMessage('Volte sempre')
    this.router.navigate(['/'])
  }
}
