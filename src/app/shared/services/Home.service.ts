import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErroresService } from '../../shared/errores.service';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public headers: HttpHeaders = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });

  constructor(
    private http: HttpClient,
    private errores: ErroresService

  ) { }

  public Config(): Observable<any> {
    return this.http
      .post(`${environment.baseUrl}arieserp/configuraciones/activas/0`,{},
        { headers: this.headers })
      .pipe(
        catchError(error => {
          return throwError(this.errores.getErrores(error));
        })
      );
  }

  public Menu(): Observable<any> {
    return this.http
      .post(`${environment.baseUrl}arieserp/configuraciones/menu/${localStorage.getItem('id_usuario')}`,{},
        { headers: this.headers })
      .pipe(
        catchError(error => {
          return throwError(this.errores.getErrores(error));
        })
      );
  }

}
