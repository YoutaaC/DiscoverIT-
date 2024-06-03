import { Component } from '@angular/core';
import { Event } from '../models/event.model';
import { EventService } from '../event.service';
import { AuthenticationService } from '../authentication.service';
import { User } from '../models/user.model';
import Swal from 'sweetalert2'
declare var $:any;
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  currentUser: User | null = null;

  events: Event[] = [];
  accessToken!:any;
  
  ngOnInit(): void {

    const userAccessToken = localStorage.getItem('accessToken'); 

    const userData = localStorage.getItem('accessToken');
       if (userData) {
      this.currentUser = JSON.parse(userData);

      this.accessToken = userAccessToken;
    } else {
      console.error('User data not found in local storage');
    }


    this.createEvent();
  }

constructor(private eventService: EventService,private autService:AuthenticationService){}


newEvent: any = {
  id:-1,
  title:"",
  body:"",
  mini_body:"",
  type:"",
  categorie:"",
  lieu:"",
  time:"",
  capacite_max:"",
  jour_debut:"",
  mois_debut:"",
  annee_debut:"",
  date_fin:"",
  prix:0.0,
  creationDate: new Date()
};

EventToAdd!:Event;


  createEvent() {
    if (this.newEvent.title && this.newEvent.body && this.newEvent.type) {
      this.eventService.createEvent(this.newEvent)
        .subscribe(createdEvent => {
          console.log('Event added successfully:', createdEvent);
          Swal.fire({
            title: "Succès",
            text: "Événement ajouté avec succès",
            icon: "success"
          });
        }, error => {
          console.error('Error adding Event:', error);
          Swal.fire({
            title: "Error !",
            text: "Erreur lors de l'ajout de l'événement",
            icon: "error"
          });
        });
    } else {
      console.error('Title and body sont requis.');
      
    }
  }



}



