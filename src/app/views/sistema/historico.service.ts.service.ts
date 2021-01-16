//import { Historico } from './../../../types';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Historico } from './historico.model'

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  baseUrl = "https://combustivelapp.herokuapp.com"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
      })
    }

    create(historico: Historico): Observable<Historico> {
      return  this.http.post<Historico>(this.baseUrl, historico)
    }
}