import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
  getAccessToken(): string | null {
    const tokenData = localStorage.getItem('accessToken');
    if (tokenData) {
      const parsedTokenData = JSON.parse(tokenData);
      return parsedTokenData.accessToken;
    } else {
      return null;
    }
  }
  
}
