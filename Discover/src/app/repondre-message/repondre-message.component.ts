import { Component } from '@angular/core';
import { Contact } from '../models/contact.model';
import { MessageService } from '../message.service';
import { ActivatedRoute } from '@angular/router';
import { MailService } from '../mail.service';
import Swal from 'sweetalert2';
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
  newcontact :any={
    to:"",
    subject:"",
    body:"",
  }


  userId! :number;
  
  constructor(private messageService:MessageService, private route:ActivatedRoute,private mailService : MailService){}
  
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

 

  sendMail( to: string, subject: string, body: string) {
    this.mailService.sendMail(to, subject, body)
      .subscribe(response => {
        console.log('Email sent successfully:', response);
        Swal.fire({
          title: "success",
          text: "Email envoyé avec succès",
          icon: "success"
        });
      }, error => {
        console.error('Error sending email:', error);
        Swal.fire({
          title: "success",
          text: "Email envoyé avec succès",
          icon: "success"
        });
      });
      Swal.fire({
        title: "success",
        text: "Email envoyé avec succès",
        icon: "success"
      });
  }
}
