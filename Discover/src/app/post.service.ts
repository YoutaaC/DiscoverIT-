import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Post } from './models/post.model';
import { AuthenticationService } from './authentication.service'; 

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl="http://localhost:8000/posts/"
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

    return this.httpClient.get<Post[]>(this.apiUrl + "getAll", { headers })
      .pipe(
        catchError(error => {
          console.error('Error fetching  posts:', error);
          return throwError(error); 
        })
      );
  }
  
  createPosts(post: any): Observable<Post> {
    const accessToken = this.authService.getAccessToken();

    if (!accessToken) {
      throw new Error('Access token not found.'); 
    }
    console.log(accessToken);
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });

    return this.httpClient.post<any>(this.apiUrl + 'add', post, { headers })
      .pipe(
        catchError(error => {
          console.error('Error fetching posts:', error);
          return throwError(error); 
        })
      );
  }

//get post by id:
getPostById(id: number): Observable<Post> {
    const accessToken = this.authService.getAccessToken();

    if (!accessToken) {
      throw new Error('Access token not found.'); 
    }
    console.log(accessToken);
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });

    return this.httpClient.get<Post>(this.apiUrl + 'getPostById/'+id, { headers })
      .pipe(
        catchError(error => {
          console.error('Error fetching posts:', error);
          return throwError(error); 
        })
      );
  }
//update post :
updatePostPut(id: number, post: Post): Observable<Post> {
  const accessToken = this.authService.getAccessToken();

  if (!accessToken) {
    throw new Error('Access token not found.'); 
  }
  console.log(accessToken);
  const headers = new HttpHeaders({
    "Authorization": "Bearer " + accessToken
  });

  return this.httpClient.put<any>(this.apiUrl + 'update/'+id, post, { headers })
    .pipe(
      catchError(error => {
        console.error('Error fetching posts:', error);
        return throwError(error); 
      })
    );
}
//delete post :
deletePost(id: number): Observable<Post> {
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
        console.error('Error fetching posts:', error);
        return throwError(error); 
      })
    );
}

}
