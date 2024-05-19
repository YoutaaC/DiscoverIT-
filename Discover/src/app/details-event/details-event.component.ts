import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { EventService } from '../event.service';
import { User } from '../models/user.model';
import { Event } from '../models/event.model';
import { MailService } from '../mail.service';

declare var $:any;
@Component({
  selector: 'app-details-event',
  templateUrl: './details-event.component.html',
  styleUrls: ['./details-event.component.css']
})
export class DetailsEventComponent {
  
    
  event!:Event;
  eventId! :number;
  accessToken!: any;
  currentUser!: User;
  currentId! :number;



  constructor(private eventService:EventService, private route:ActivatedRoute,private userService : UserService,private router : Router, private mailService:MailService){}
  
  ngOnInit(): void {
    this.eventId=+this.route.snapshot.paramMap.get('id')!;
    this.getEventById();

  }




  getEventById(){
    this.eventService.getEventById(this.eventId).subscribe(eventt =>
      {
        this.event=eventt
      })
  }
  
  getUser(){
    this.userService.getUserById(this.currentId).subscribe(userp =>
      {
        this.currentUser=userp
      })
  }
  gotoReservation(id :number) {
    this.router.navigate(["/reservation",id])
  }


  // sendMail(file: File[], to: string, cc: string[], subject: string, body: string) {
  //   this.mailService.sendMail(file, to, cc, subject, body)
  //     .subscribe(response => {
  //       console.log('Email sent successfully:', response);
  //     }, error => {
  //       console.error('Error sending email:', error);
  //     });
  // }



  
}
