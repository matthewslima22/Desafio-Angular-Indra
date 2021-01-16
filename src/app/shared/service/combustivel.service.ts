import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Type } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { ResponsePageable } from '../model/responsePageable.model';
import { Combustivel, Historico, Media, Usuario, UsuarioDTO } from './types'
    

@Injectable({
  
  providedIn: 'root'
})
export class CombustivelService {
  

 API_URL = `https://combustivelapp.herokuapp.com`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
      
    })
  };
 
  

  constructor(
    private HttpClient: HttpClient
  ) { }

  public getCombustivelWithApi(api: string): Observable<Combustivel> {
    return this.HttpClient.get<Combustivel>(this.API_URL + '/api' + api);
  }
  public getHistoricoWithFlag(flag: string): Observable<Historico> {
    return this.HttpClient.get<Historico>(this.API_URL + '?flag=' + flag);
}
  public getMediaWithFlag(flag: string): Observable<Media> {
  return this.HttpClient.get<Media>(this.API_URL + '?flag=' + flag);
}
public getUsuarioWithFlag(flag: string): Observable<Usuario> {
  return this.HttpClient.get<Usuario>(this.API_URL + '?flag=' + flag);
}
public getUsuarioDTOWithFlag(flag: string): Observable<UsuarioDTO> {
  return this.HttpClient.get<UsuarioDTO>(this.API_URL + '?flag=' + flag);
}

}
export default CombustivelService;