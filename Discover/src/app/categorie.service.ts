import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Categorie } from './models/categorie.model';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private apiUrl="http://localhost:8000/categories/"
  constructor(
    private httpClient: HttpClient,
    private authService: AuthenticationService 
  ) { }


  getAllCategories(): Observable<Categorie[]> {
    const accessToken = this.authService.getAccessToken();

    if (!accessToken) {
      throw new Error('Access token not found.'); 
    }
    console.log(accessToken);
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });

    return this.httpClient.get<Categorie[]>(this.apiUrl + "getAll", { headers })
      .pipe(
        catchError(error => {
          console.error('Error fetching categories:', error);
          return throwError(error); 
        })
      );
  }


  createCategorie(categorie: Categorie): Observable<Categorie> {
    const accessToken = this.authService.getAccessToken();
  
    if (!accessToken) {
      throw new Error('Access token not found.'); 
    }
    console.log(accessToken);
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });
  
    return this.httpClient.post<any>(this.apiUrl + 'add', categorie, { headers })
      .pipe(
        catchError(error => {
          console.error('Error fetching categories:', error);
          return throwError(error); 
        })
      );
  }


  deleteCategorie(id: number): Observable<Categorie> {
    const accessToken = this.authService.getAccessToken();
  
    if (!accessToken) {
      throw new Error('Access token not found.'); 
    }
    console.log(accessToken);
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });
  
    return this.httpClient.delete<any>(this.apiUrl + 'delete/'+id, { headers })
      .pipe(
        catchError(error => {
          console.error('Error fetching categories:', error);
          return throwError(error); 
        })
      );
  }


  updateCategorie(id:number,categorie:Categorie): Observable<Categorie> {
    const accessToken = this.authService.getAccessToken();

    if (!accessToken) {
      throw new Error('Access token not found.'); 
    }
    console.log(accessToken);
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });

    return this.httpClient.put<Categorie>(this.apiUrl + "updateUser/"+id,categorie, { headers })
      .pipe(
        catchError(error => {
          console.error('Error fetching users:', error);
          return throwError(error); 
        })
      );
  }

  getCategorieById(id: number): Observable<Categorie>{
    const accessToken = this.authService.getAccessToken();
  
    if (!accessToken) {
      throw new Error('Access token not found.'); 
    }
    console.log(accessToken);
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });
  
    return this.httpClient.get<any>(this.apiUrl + 'getCategorieById/'+id, { headers })
      .pipe(
        catchError(error => {
          console.error('Error fetching events:', error);
          return throwError(error); 
        })
      );
  }

}
