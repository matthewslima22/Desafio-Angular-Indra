import { Usuario } from './../../../types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Sistema } from './sistema.model';

@Injectable({
  providedIn: 'root'
})
export class SistemaService {

  baseUrl = "https://combustivelapp.herokuapp.com"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
      })
    }

    create(sistema: Sistema): Observable<Sistema> {
      return  this.http.post<Sistema>(this.baseUrl, sistema)
    }
    
    delete(id: string): Observable<Usuario> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.delete<Usuario>(url);
    }
}
