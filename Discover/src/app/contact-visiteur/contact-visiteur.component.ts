import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../models/contact.model';
import { MessageService } from '../message.service';
import { User } from '../models/user.model';
import Swal from 'sweetalert2';
declare var $:any;
@Component({
  selector: 'app-contact-visiteur',
  templateUrl: './contact-visiteur.component.html',
  styleUrls: ['./contact-visiteur.component.css']
})
export class ContactVisiteurComponent {
  currentUser: User | null = null;

  events: Event[] = [];
  accessToken!:any;

  forminput!:FormGroup;
  forminput1!:FormGroup;
  forminput2!:FormGroup;
  forminput3!:FormGroup;
  forminput5!:FormGroup;

  constructor(private router:Router,private formBuilder:FormBuilder,private messageService:MessageService) {} 
  ngOnInit(): void {

    const userAccessToken = localStorage.getItem('accessToken'); 

    const userData = localStorage.getItem('accessToken');
       if (userData) {
      this.currentUser = JSON.parse(userData);

      this.accessToken = userAccessToken;
    } else {
      console.error('User data not found in local storage');
    }


    this.createContact();

    this.forminput=this.formBuilder.group(
      {
        'nom':['',[Validators.required]]
      }
    );

    this.forminput1=this.formBuilder.group(
      {
        'prenom':['',[Validators.required]]
      }
    );

    this.forminput2=this.formBuilder.group(
      {
        'email':['',[Validators.required,Validators.email]]
      }
    );

    this.forminput3=this.formBuilder.group(
      {
        'objet':['',[Validators.required]]
      }
    );

   

    this.forminput5=this.formBuilder.group(
      {
        'message':['',[Validators.required]]
      }
    );

  }

  newContact :any={
    id:-1,
    nomUser:"",
    prenomUser:"",
    emailUser:"",
    objet:"",
    message:"",
    creationDate: new Date() ,
  }

  ContactToAdd!:Contact;

  
  createContact() {
    if (this.newContact.nomUser && this.newContact.prenomUser && this.newContact.emailUser && this.newContact.objet && this.newContact.message) {
      this.messageService.createContact(this.newContact)
        .subscribe(createdContact => {
          console.log('Message added successfully:', createdContact);
          Swal.fire({
            title: "Message envoyer avec succée !",
            
            icon: "success"
          });
        }, error => {
          console.error('Error adding Event:', error);
          Swal.fire('Error!', 'An error occurred during deletion.', 'error');
        });
    } else {
      console.error('Title and body are required.');
    }
  }

}
