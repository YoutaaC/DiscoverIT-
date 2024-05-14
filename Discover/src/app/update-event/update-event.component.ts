import { Component } from '@angular/core';
import { Event } from '../models/event.model';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { EventService } from '../event.service';
import Swal from 'sweetalert2'
declare var $:any;
@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent {
  event!:Event;
  eventId! :number;

  
  constructor(private eventService:EventService, private route:ActivatedRoute){}
  
  ngOnInit(): void {
    this.eventId=+this.route.snapshot.paramMap.get('id')!;
    this.getEvent();
  }
  
  getEvent(){
    this.eventService.getEventById(this.eventId).subscribe(eventp =>
      {
        this.event=eventp
      })
  }
  
  
  confirmUpdate() {
    Swal.fire({
      title: 'Are you sure you want to update this event?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!', 
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.event) { 
          this.eventService.updateEventPut(this.eventId, this.event)
            .subscribe(updatedEvent => {
              console.log('Updated Event:', updatedEvent); 
              Swal.fire('Updated!', 'Event updated successfully.', 'success');
              
            }, (error) => {
              console.error('Error updating event:', error);
              Swal.fire('Error!', 'An error occurred during update.', 'error');
            });
        } else {
          console.error('No event data to update!'); 
        }
      }
    });
  }
  


}
