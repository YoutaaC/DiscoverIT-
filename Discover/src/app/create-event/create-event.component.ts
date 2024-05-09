import { Component } from '@angular/core';
import { Event } from '../models/event.model';
import { EventService } from '../event.service';
import { AuthenticationService } from '../authentication.service';
import { User } from '../models/user.model';
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


//add new post :
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
          console.log('Post added successfully:', createdEvent);
          $('#addModal').modal('show');
        }, error => {
          console.error('Error adding Event:', error);
        });
    } else {
      console.error('Title and body are required.');
    }
  }


closeAddEvent(){
  $('#addModal').modal('hide');
  
}
}



