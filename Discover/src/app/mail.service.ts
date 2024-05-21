import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private apiUrl="http://localhost:8000/mail/"
  constructor(
    private httpClient: HttpClient,
    private authService: AuthenticationService
  ) { }

  sendMail( to: string, subject: string, body: string): Observable<any> {
    const formData = new FormData();
    formData.append('to', to);
    formData.append('subject', subject);
    formData.append('body', body);

    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });

    return this.httpClient.post('mail/send', formData, { headers });
  }

}
