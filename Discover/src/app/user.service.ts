import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from './models/user.model';
import { AuthenticationService } from './authentication.service'; 
import { Post } from './models/post.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl="http://localhost:8000/user/"
  private apiUrl1="http://localhost:8000/api/auth"


  constructor(
    private httpClient: HttpClient,
    private authService: AuthenticationService 
  ) { }

  getAllUsers(): Observable<User[]> {
    const accessToken = this.authService.getAccessToken();

    if (!accessToken) {
      throw new Error('Access token not found.'); 
    }
    console.log(accessToken);
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });

    return this.httpClient.get<User[]>(this.apiUrl + "getAllUsers", { headers })
      .pipe(
        catchError(error => {
          console.error('Error fetching users:', error);
          return throwError(error); 
        })
      );
  }



//register function
    
    register(user: User) {
      return this.httpClient.post<any>(this.apiUrl1+ "/register", user);
    }


    //login function

    login(loginDate:{username:String;password:String}):Observable<any>
    {
      return this.httpClient.post<any>(this.apiUrl1+"/login",loginDate)
    }

    //delete User with username function

    deleteUser(username:String): Observable<any> {
      const accessToken = this.authService.getAccessToken();
  
      if (!accessToken) {
        throw new Error('Access token not found.'); 
      }
      console.log(accessToken);
      const headers = new HttpHeaders({
        "Authorization": "Bearer " + accessToken
      });
  
      return this.httpClient.delete<any>(this.apiUrl + "delete/"+username, { headers })
        .pipe(
          catchError(error => {
            console.error('Error fetching users:', error);
            return throwError(error); 
          })
        );
    }


// update user

  
  updateUser(id:number,user:User): Observable<User> {
    const accessToken = this.authService.getAccessToken();

    if (!accessToken) {
      throw new Error('Access token not found.'); 
    }
    console.log(accessToken);
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });

    return this.httpClient.put<User>(this.apiUrl + "updateUserP/"+id,user, { headers })
      .pipe(
        catchError(error => {
          console.error('Error fetching users:', error);
          return throwError(error); 
        })
      );
  }

// get one user with id

getUserById(id:number): Observable<User> {
  const accessToken = this.authService.getAccessToken();

  if (!accessToken) {
    throw new Error('Access token not found.'); 
  }
  console.log(accessToken);
  const headers = new HttpHeaders({
    "Authorization": "Bearer " + accessToken
  });

  return this.httpClient.get<User>(this.apiUrl + "getUserById/"+id, { headers })
    .pipe(
      catchError(error => {
        console.error('Error fetching users:', error);
        return throwError(error); 
      })
    );
}


// getAllPosts(): Observable<Post[]> {
//   const accessToken = this.authService.getAccessToken();

//   if (!accessToken) {
//     throw new Error('Access token not found.'); 
//   }
//   console.log(accessToken);
//   const headers = new HttpHeaders({
//     "Authorization": "Bearer " + accessToken
//   });

//   return this.httpClient.get<Post[]>(this.apiUrl + "getAllPosts", { headers })
//     .pipe(
//       catchError(error => {
//         console.error('Error fetching users:', error);
//         return throwError(error); 
//       })
//     );
// }

// getAllEvents(): Observable<Event[]> {
//   const accessToken = this.authService.getAccessToken();

//   if (!accessToken) {
//     throw new Error('Access token not found.'); 
//   }
//   console.log(accessToken);
//   const headers = new HttpHeaders({
//     "Authorization": "Bearer " + accessToken
//   });

//   return this.httpClient.get<Event[]>(this.apiUrl + "getAllEvents", { headers })
//     .pipe(
//       catchError(error => {
//         console.error('Error fetching users:', error);
//         return throwError(error); 
//       })
//     );
// }



//recherche par username , id ou email

// searchUsers(username?: string, id?: number, email?: string): Observable<User[]> {
//   let params = new HttpParams();
//   if (username) {
//     params = params.set('username', username);
//   }
//   if (id) {
//     params = params.set('id', id.toString());
//   }
//   if (email) {
//     params = params.set('email', email);
//   }

//   return this.httpClient.get<User[]>(`${this.apiUrl}/search`, { params });
// }
}
