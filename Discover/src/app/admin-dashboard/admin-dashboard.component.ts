import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user.model';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';
import { Contact } from '../models/contact.model';
import { CategorieService } from '../categorie.service';
import { Categorie } from '../models/categorie.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  currentUser!: User;
  contacts: Contact[] = [];
  categories: Categorie[] = [];
  users: User[] = [];
  accessToken!:any;
  contactToDelete!: Contact | null;

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
    this.getAllCategories()
  }
  constructor(private categorieService: CategorieService,private messageService: MessageService, private router: Router,private userService: UserService) { }
  
  getAllContacts(): void {
    this.messageService.getAllContacts().subscribe(msgs => {
      this.contacts = msgs;
    }, error => {
      console.error('Error fetching users:', error);
    });
  }
  getAllCategories(): void {
    this.categorieService.getAllCategories().subscribe(evtns => {
      this.categories = evtns;
    }, error => {
      console.error('Error fetching Categories:', error);
    });
  }

  logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessToken");
    window.location.reload();
  }

}
