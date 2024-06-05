import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Event } from '../models/event.model';
import Swal from 'sweetalert2';
import { Categorie } from '../models/categorie.model';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-event-visiteur',
  templateUrl: './event-visiteur.component.html',
  styleUrls: ['./event-visiteur.component.css']
})
export class EventVisiteurComponent {
  events: Event[] = [];
  accessToken!: any;
  currentUser!: User;
  catgs: Categorie[] = [];

  typeFilter: string[] = [];
  pricesChecked: number[] = [];

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
  constructor(private eventService: EventService, private router: Router,  private categorieService: CategorieService) {}

  getAllEvents(): void {
    this.eventService.getAllEvents().subscribe(evtns => {
      this.events = evtns;
    }, error => {
      console.error('Error fetching events:', error);
    });
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

  gotoSignup() {
    this.router.navigate(["/signup"])
  }

  filter(events: Event[]): Event[] {
    const FilterByType= this.typeFilter.length === 0;
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


  wannasignup(){
    Swal.fire({
      title: "Créer un compte",
      text: "Cette fonctionnalité est accessible lorsque vous créez un compte.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "S'inscrire"
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['signup']);
      }
    });
  }

}
