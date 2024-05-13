import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Observable, catchError, throwError } from 'rxjs';
import { Event } from './models/event.model';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl="http://localhost:8080/events/"
  constructor(
    private httpClient: HttpClient,
    private authService: AuthenticationService 
  ) { }

  getAllEvents(): Observable<Event[]> {
    const accessToken = this.authService.getAccessToken();

    if (!accessToken) {
      throw new Error('Access token not found.'); 
    }
    console.log(accessToken);
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });

    return this.httpClient.get<Event[]>(this.apiUrl + "getAll", { headers })
      .pipe(
        catchError(error => {
          console.error('Error fetching events:', error);
          return throwError(error); 
        })
      );
  }


  deleteEvent(id: number): Observable<Event> {
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
          console.error('Error fetching events:', error);
          return throwError(error); 
        })
      );
  }

  updateEventPut(id: number, event: Event): Observable<Event> {
    const accessToken = this.authService.getAccessToken();
  
    if (!accessToken) {
      throw new Error('Access token not found.'); 
    }
    console.log(accessToken);
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });
  
    return this.httpClient.put<any>(this.apiUrl + 'update/'+id, event, { headers })
      .pipe(
        catchError(error => {
          console.error('Error fetching events:', error);
          return throwError(error); 
        })
      );
  }

  getEventById(id: number): Observable<Event> {
    const accessToken = this.authService.getAccessToken();
  
    if (!accessToken) {
      throw new Error('Access token not found.'); 
    }
    console.log(accessToken);
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });
  
    return this.httpClient.get<any>(this.apiUrl + 'getEventById/'+id, { headers })
      .pipe(
        catchError(error => {
          console.error('Error fetching events:', error);
          return throwError(error); 
        })
      );
  }

  createEvent(event: Event): Observable<Event> {
    const accessToken = this.authService.getAccessToken();
  
    if (!accessToken) {
      throw new Error('Access token not found.'); 
    }
    console.log(accessToken);
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });
  
    return this.httpClient.post<any>(this.apiUrl + 'add', event, { headers })
      .pipe(
        catchError(error => {
          console.error('Error fetching events:', error);
          return throwError(error); 
        })
      );
  }


}
