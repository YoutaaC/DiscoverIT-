import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-event-visiteur',
  templateUrl: './event-visiteur.component.html',
  styleUrls: ['./event-visiteur.component.css']
})
export class EventVisiteurComponent {
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
  constructor(private eventService: EventService, private router: Router) {}

  getAllEvents(): void {
    this.eventService.getAllEvents().subscribe(evtns => {
      this.events = evtns;
    }, error => {
      console.error('Error fetching events:', error);
    });
  }

  isOpen = false; 

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  gotoSignup() {
    this.router.navigate(["/signup"])
  }




}
