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
  catgs: Categorie[] = [];
  accessToken!: any;
  currentUser!: User;
 
  typeFilter: string[] = [];
  pricesChecked: number[] = [];
 
  ngOnInit(): void {
    const userAccessToken = localStorage.getItem('accessToken');
 
    const userData = localStorage.getItem('accessToken');
    if (userData) {
      this.currentUser = JSON.parse(userData);
 
      this.accessToken = userAccessToken;
    } else {
      console.error('User data not found in local storage');
    }
    this.getAllEvents();
    this.getAllCategories();
  }
  constructor(
    private eventService: EventService,
    private router: Router,
    private mailService: MailService,
    private categorieService: CategorieService
  ) {}
 
  getAllEvents(): void {
    this.eventService.getAllEvents().subscribe(
      (evtns) => {
        this.events = evtns;
        console.log(evtns);
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }
 
  getAllCategories(): void {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
 
    this.categorieService.getAllCategories().subscribe(
      (evtns) => {
        this.catgs = evtns;
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }
 
  isOpen = false;
 
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
 
  gotoReservation(id: number) {
    this.router.navigate(['/reservation', id]);
  }
 
  gotoDetailsEvent(id: number) {
    this.router.navigate(['/detailsEvent', id]);
  }
 
  calender(id: number) {
    this.router.navigate(['/calender', id]);
  }
 
  filter(events: Event[]): Event[] {
    const FilterByType= this.typeFilter.length > 0;
    const FilterByPrice= this.pricesChecked.length > 0 ? this.pricesChecked.reduce((a, b) => Math.min(a, b), 2) : -1;
    console.log('pricesChecked', this.pricesChecked);
    events.forEach((e) => {
      console.log(e.prix,(FilterByPrice <= e.prix ),FilterByType);
    });
 
    let result: Event[] = events.filter((e) =>
      (this.typeFilter.includes(e.type) || FilterByType) &&
      (FilterByPrice=== 0?e.prix=== 0 : FilterByPrice <= e.prix  )
    );
    console.log(result);
    return result;
  }
 
  getCheck(chkbox: string) {
    if (this.typeFilter.includes(chkbox)) {
      this.typeFilter.splice(this.typeFilter.indexOf(chkbox), 1);
    } else {
      this.typeFilter.push(chkbox);
    }
  }
 
  handlePriceChecked(price: number) {
    if (this.pricesChecked.includes(price)) {
      this.pricesChecked.splice(this.pricesChecked.indexOf(price), 1);
    } else {
      this.pricesChecked.push(price);
    }
  }
  }

  
