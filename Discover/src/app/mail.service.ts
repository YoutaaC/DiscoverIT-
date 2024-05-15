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

  sendMail(file: File[], to: string, cc: string[], subject: string, body: string): Observable<any> {
    const formData = new FormData();
    if (file) {
      for (const f of file) {
        formData.append('file', f);
      }
    }
    formData.append('to', to);
    formData.append('cc', cc.join(',')); 
    formData.append('subject', subject);
    formData.append('body', body);

    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });

    // Replace with your actual mail API endpoint URL
    return this.httpClient.post('/api/mail/send', formData, { headers });
  }

}
