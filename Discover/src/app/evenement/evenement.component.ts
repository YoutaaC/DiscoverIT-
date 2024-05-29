import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Event } from '../models/event.model';
import { EventService } from '../event.service';
import { MailService } from '../mail.service';
import { CategorieService } from '../categorie.service';
import { Categorie } from '../models/categorie.model';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent {

  events: Event[] = [];
  catgs:Categorie[] =[];
  accessToken!: any;
  currentUser!: User;

  typeFilter:string[] = [];

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
    this.getAllCategories();

  }
  constructor(private eventService: EventService, private router: Router,private mailService: MailService,private categorieService:CategorieService) {}

  getAllEvents(): void {
    this.eventService.getAllEvents().subscribe(evtns => {
      this.events = evtns;
      console.log(evtns);
    }, error => {
      console.error('Error fetching events:', error);
    });
  }


  getAllCategories(): void {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

    this.categorieService.getAllCategories().subscribe(evtns => {
      this.catgs = evtns;
      
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


    filter(events: Event[]): Event[] {
      let result: Event[] = [];
    
      return result;
    }

    tt(){
      // console.log("kharejj hajaa yehdikk ")
      // tt(chkbox:string){ 

      // }
    }
  }

  
