import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { User } from '../models/user.model';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
declare var $:any;
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  currentUser!: User;
  contacts: Contact[] = [];
  users: User[] = [];
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
    
    this.getAllContacts();
  }
  constructor(private messageService: MessageService, private router: Router,private userService: UserService) { }
  getAllContacts(): void {
    this.messageService.getAllContacts().subscribe(msgs => {
      this.contacts = msgs;
    }, error => {
      console.error('Error fetching users:', error);
    });
  }

  ContactToDelete!:Contact;
  confirmDelete(contact:Contact){
    $('#deleteModal').modal('show');
    this.ContactToDelete=contact;
  }

  closeDelete(){
    $('#deleteModal').modal('hide');
    window.location.reload();
  }
  deleteContact()
  {
    this.messageService.deleteContact(this.ContactToDelete.id)
    .subscribe(() =>{
      console.log("deleted")
      $('#deleteModal').modal('hide');
      window.location.reload();
  
    })
  }
  logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessToken");

    window.location.reload();
  }
}
