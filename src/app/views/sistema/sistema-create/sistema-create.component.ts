import { Sistema } from './../sistema.model';
import { SistemaService } from './../sistema.service.ts.service';
//import { Usuario } from './../../../../types';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-sistema-create',
  templateUrl: './sistema-create.component.html',
  styleUrls: ['./sistema-create.component.css']
})
export class SistemaCreateComponent implements OnInit {

  sistema: Sistema = {
    admin: true,
    senha: '',
    nome: '',
    login: '',
    email: ''

     
  }

  constructor(private SistemaService: SistemaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createUsuario(): void{
    this.SistemaService.create(this.sistema).subscribe(() =>{
    

    this.SistemaService.showMessage('Operação bem sucedida')
    this.router.navigate(['/'])
  })
}
  cancel(): void {
    this.SistemaService.showMessage('Volte sempre')
    this.router.navigate(['/'])
  }
}
