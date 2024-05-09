import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Post } from './models/post.model';
import { Observable, catchError, throwError } from 'rxjs';
import { Event } from './models/event.model';

@Injectable({
  providedIn: 'root'
})
export class VisiteurService {
  private apiUrl="http://localhost:8080/visiteur/"
  constructor(
    private httpClient: HttpClient,
    private authService: AuthenticationService 
  ) { }

  getAllPosts(): Observable<Post[]> {
    const accessToken = this.authService.getAccessToken();

    if (!accessToken) {
      throw new Error('Access token not found.'); 
    }
    console.log(accessToken);
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });

    return this.httpClient.get<Post[]>(this.apiUrl + "getAllPosts", { headers })
      .pipe(
        catchError(error => {
          console.error('Error fetching users:', error);
          return throwError(error); 
        })
      );
  }

  getAllEvents(): Observable<Event[]> {
    const accessToken = this.authService.getAccessToken();

    if (!accessToken) {
      throw new Error('Access token not found.'); 
    }
    console.log(accessToken);
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });

    return this.httpClient.get<Event[]>(this.apiUrl + "getAllEvents", { headers })
      .pipe(
        catchError(error => {
          console.error('Error fetching users:', error);
          return throwError(error); 
        })
      );
  }
}
