import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl = 'http://localhost:8000/image';

  constructor(private httpClient: HttpClient) { }

  uploadImage(imageFile: File, idUser: string, accessToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });

    const formData = new FormData();
    formData.append('imageFile', imageFile);

    return this.httpClient.post<any>(`${this.apiUrl}/upload/${idUser}`, formData, { headers }); 
  }


  getImage(idUser: string, accessToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });

    return this.httpClient.get<any>(`${this.apiUrl}/get/${idUser}?token=${accessToken}`, { headers });
  } 
}
