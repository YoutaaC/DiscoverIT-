import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private apiUrl = "http://localhost:8000/mail/";

  constructor(
    private httpClient: HttpClient,
    private authService: AuthenticationService
  ) { }

  sendMail(to: string, subject: string, body: string): Observable<any> {
    if (!this.isValidEmail(to)) {
      return throwError(() => new Error('Invalid email address format.'));
    }

    const formData = new FormData();
    formData.append('to', to);
    formData.append('subject', subject);
    formData.append('body', body);

    const authToken = this.authService.getAccessToken(); // Adjust based on your actual method to get the token

    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data',
      'Authorization': `Bearer ${authToken}`
    });

    return this.httpClient.post(this.apiUrl + 'send', formData, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      switch (error.status) {
        case 400:
          errorMessage = 'Bad Request. Please check the provided data.';
          break;
        case 401:
          errorMessage = 'Unauthorized. Please check your authentication.';
          break;
        case 500:
          errorMessage = 'Internal Server Error. Please try again later.';
          break;
        default:
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          break;
      }
    }
    return throwError(() => new Error(errorMessage));
  }

  // sendMail(to: string, subject: string, body: string): Observable<any> {
  //   const formData = new FormData();
  //   formData.append('to', to);
  //   formData.append('subject', subject);
  //   formData.append('body', body);

   
  //   const authToken = this.authService.getAccessToken(); 

  //   const headers = new HttpHeaders({
  //     'enctype': 'multipart/form-data',
  //     'Authorization': `Bearer ${authToken}`
  //   });

  //   return this.httpClient.post(this.apiUrl + 'send', formData, { headers });
  // }

}
