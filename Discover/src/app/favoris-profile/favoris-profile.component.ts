import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { EventService } from '../event.service';
import { User } from '../models/user.model';
import { Event } from '../models/event.model';
@Component({
  selector: 'app-favoris-profile',
  templateUrl: './favoris-profile.component.html',
  styleUrls: ['./favoris-profile.component.css']
})
export class FavorisProfileComponent {
  users: User[] = [];
  events: Event[] = [];
  currentUser!: User;
  accessToken!: any;

  isFavori1 = false;
  
  isFavori2 = false;
  
  ngOnInit(): void {
    const userAccessToken = localStorage.getItem("accessToken"); 

    const userData = localStorage.getItem("accessToken");
       if (userData) {
      this.currentUser = JSON.parse(userData);

      this.accessToken = userAccessToken;
    } else {
      console.error('User data not found in local storage');
    }

    this.getAllEvents();
  }

  
  constructor(private userService: UserService, private router:Router,private httpClient : HttpClient,private eventService: EventService) {}


  getAllEvents(): void {
    this.eventService.getAllEvents().subscribe(evtns => {
      this.events = evtns;
    }, error => {
      console.error('Error fetching events:', error);
    });
  }


  logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessToken");
    window.location.reload();
    this.router.navigate(["/"])
  }
  gotoReservation(id :number) {
    this.router.navigate(["/reservation",id])
  }

  gotoDetailsEvent(id :number) {
    this.router.navigate(["/detailsEvent",id])
  }

  get FavIconClass1() {
    return this.isFavori1 ? 'fa-regular fa-heart icon-fav' : 'fa-solid fa-heart icon-favoris';
  }
  toggleFav1() {
    this.isFavori1 = !this.isFavori1; 
  }

  get FavIconClass2() {
    return this.isFavori2 ? 'fa-regular fa-heart icon-fav' : 'fa-solid fa-heart icon-favoris';
  }
  toggleFav2() {
    this.isFavori2 = !this.isFavori2; 
  }
}
