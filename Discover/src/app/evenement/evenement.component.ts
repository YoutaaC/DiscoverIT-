import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Event } from '../models/event.model';
import { EventService } from '../event.service';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent {

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
  constructor(private eventService: EventService, private router: Router,private mailService: MailService) {}

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

  gotoReservation(id :number) {
    this.router.navigate(["/reservation",id])
  }

  gotoDetailsEvent(id :number) {
    this.router.navigate(["/detailsEvent",id])
  }

  calender(id :number) {
    this.router.navigate(["/calender",id])
  }

  
}
