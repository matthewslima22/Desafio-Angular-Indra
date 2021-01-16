
import { Component, OnInit } from '@angular/core';
import { CombustivelService } from 'src/app/shared/service/combustivel.service';
import { Combustivel, Historico, Media, Usuario, UsuarioDTO } from './types'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  combustivelDados: Combustivel[] = [];
  historicoDados: Historico[] = [];
  mediaDados: Media[] = [];
  usuarioDados: Usuario[] = [];
  usuarioDTODados: UsuarioDTO[] = []; 

  constructor(
    public CombustivelService: CombustivelService
  ) { }


  ngOnInit(): void {
    this.getCombustivel();
  }

  getCombustivel(){
    this.CombustivelService.getCombustivelWithApi('/combustivel').subscribe(data => {
      this.combustivelDados = data.content;
      console.log(this.combustivelDados);
    });
  

  }

}
export default ListComponent;
