import { Component } from '@angular/core';
import { Event } from '../models/event.model';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { EventService } from '../event.service';
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
  
  
  confirmUpdate(){
    $('#updateModal').modal('show');
  
  }
  
  closeUpdate()
  {
    $('#updateModal').modal('hide');
  
  }
  
  updateEvent(){
  if(this.event){
    this.eventService.updateEventPut(this.eventId,this.event).subscribe(updateEvent=>
      {
        console.log("Update",updateEvent)
        $('#updateModal').modal('hide');
  
      })
  }
  
  }
}
