import { Component } from '@angular/core';
import { Contact } from '../models/contact.model';
import { MessageService } from '../message.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repondre-message',
  templateUrl: './repondre-message.component.html',
  styleUrls: ['./repondre-message.component.css']
})
export class RepondreMessageComponent {

  contact :Contact={
    id:-1,
    nomUser:"",
    prenomUser:"",
    emailUser:"",
    objet:"",
    message:"",
    creationDate: new Date() ,
  }
  newcontact :Contact={
    id:-1,
    nomUser:"",
    prenomUser:"",
    emailUser:"",
    objet:"",
    message:"",
    creationDate: new Date() ,
  }



  userId! :number;
  
  constructor(private messageService:MessageService, private route:ActivatedRoute){}
  
  ngOnInit(): void {
    this.userId=+this.route.snapshot.paramMap.get('id')!;
    this.getUser();
  }
  
  getUser(){
    this.messageService.getContactById(this.userId).subscribe(contactp =>
      {
        this.contact=contactp
      })
  }
  confirmUpdate(){

  }
}
