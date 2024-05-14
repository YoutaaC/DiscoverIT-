import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Event } from '../models/event.model';
import { VisiteurService } from '../visiteur.service';
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
  constructor(private eventService: EventService, private router: Router,private visiteurService: VisiteurService,private mailService: MailService) {}

  getAllEvents(): void {
    this.visiteurService.getAllEvents().subscribe(evtns => {
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

  sendMail(file: File[], to: string, cc: string[], subject: string, body: string) {
    this.mailService.sendMail(file, to, cc, subject, body)
      .subscribe(response => {
        console.log('Email sent successfully:', response);
      }, error => {
        console.error('Error sending email:', error);
      });
  }

  
}
