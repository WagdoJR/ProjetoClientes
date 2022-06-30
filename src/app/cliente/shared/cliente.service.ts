import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  urlBackend: string = "http://localhost:8080"

  constructor(private http: HttpClient) {
  }

  public getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlBackend+"/api/v1/cliente/");
  }
  public salvar(cliente: Cliente): Observable<Cliente>{
    if(!cliente.id){
      return this.http.post<Cliente>(this.urlBackend+"/api/v1/cliente/",cliente);
    }else{
      return this.http.patch<Cliente>(this.urlBackend+"/api/v1/cliente/"+cliente.id, cliente);
    }

  }
  public getById(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(this.urlBackend+"/api/v1/cliente/"+id);
  }

  public remover(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(this.urlBackend+"/api/v1/cliente/"+id);
  }
}
