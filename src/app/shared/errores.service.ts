import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../auth/login/services/Storage.service';
import { catchError, Observable, throwError } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ErroresService {
 
  private http = inject(HttpClient);
  private storage = inject(StorageService);
  
  constructor() { }
 
  public getHeaders(): HttpHeaders {
      return new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem('token')}`
      });
    }
  
  public handleRequest<T>(url: string, body: any = {}): Observable<T> {
      return this.http.post<T>(url, body, { headers: this.getHeaders() })
        .pipe(
          catchError(error => {
            return throwError(this.getErrores(error));
          })
        );
    }
  


  public getErrores(error: HttpErrorResponse): string {
    switch (error.status) {      
      case 400: {
        return  JSON.stringify({ error: error.error  }, null, 2); // Indentación para mayor legibilidad
      }
      case 404: {
          return JSON.stringify({ error: error.error  }, null, 2); // Indentación para mayor legibilidad
        }
      case 403: {
        return JSON.stringify({ error: error.error  }, null, 2); // Indentación para mayor legibilidad
      }
      case 500: {
        return JSON.stringify({ error: error.error  }, null, 2);;
      }
      default: {
        return JSON.stringify({ error: error.error  }, null, 2); // Indentación para mayor legibilidad
      }
      }
  }




  }