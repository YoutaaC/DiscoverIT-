import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { VisiteurService } from '../visiteur.service';
import { User } from '../models/user.model';
import { Event } from '../models/event.model';


@Component({
  selector: 'app-historique-reservation',
  templateUrl: './historique-reservation.component.html',
  styleUrls: ['./historique-reservation.component.css']
})
export class HistoriqueReservationComponent {
  events: Event[] = [];
  accessToken!: any;
  currentUser!: User;

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
  constructor(private eventService: EventService, private router: Router,private visiteurService: VisiteurService) {}

  getAllEvents(): void {
    this.visiteurService.getAllEvents().subscribe(evnt => {
      this.events = evnt;
    }, error => {
      console.error('Error fetching events:', error);
    });
  }

  isOpen = false; // Flag to track dropdown visibility

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessToken");
    window.location.reload();
    this.router.navigate(["/"])
  }

}
