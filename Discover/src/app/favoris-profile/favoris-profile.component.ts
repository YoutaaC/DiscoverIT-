import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoris-profile',
  templateUrl: './favoris-profile.component.html',
  styleUrls: ['./favoris-profile.component.css']
})
export class FavorisProfileComponent {
  constructor(public router: Router){}
  logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessToken");
    window.location.reload();
    this.router.navigate(["/"])
  }
}
