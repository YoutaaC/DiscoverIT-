import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Observable, catchError, throwError } from 'rxjs';
import { Contact } from './models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private apiUrl="http://localhost:8080/Contactus/"
  constructor(
    private httpClient: HttpClient,
    private authService: AuthenticationService 
  ) { }


  createContact(contact: any): Observable<Contact> {
    const accessToken = this.authService.getAccessToken();

    if (!accessToken) {
      throw new Error('Access token not found.'); 
    }
    console.log(accessToken);
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });

    return this.httpClient.post<any>(this.apiUrl + 'add', contact, { headers })
      .pipe(
        catchError(error => {
          console.error('Error fetching posts:', error);
          return throwError(error); 
        })
      );
  }
}
