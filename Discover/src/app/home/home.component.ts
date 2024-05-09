import { Component, ElementRef, ViewChild } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../post.service';
import { User } from '../models/user.model';
import { EventService } from '../event.service';
import { VisiteurService } from '../visiteur.service';
import { Event } from '../models/event.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLiked = false;

  @ViewChild('heartIconRef', { static: false }) heartIconRef: ElementRef<HTMLElement> | null = null; 
  
  toggleLike(): void {
    const iconElement = this.heartIconRef?.nativeElement ?? document.getElementById('btn_like'); 
  
    if (iconElement) {
     
      if (this.isLiked) {
        iconElement.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>'; 
      } else {
        iconElement.innerHTML = '<i class="fa-regular fa-thumbs-up"></i>'; 
      }
    }
  
    this.isLiked = !this.isLiked; 
  }

  isOpen = false; // Flag to track dropdown visibility

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  users: User[] = [];
  posts: Post[] = [];
  events: Event[] = [];
  currentUser!: User;
  accessToken!: any;


  ngOnInit(): void {
    const userAccessToken = localStorage.getItem("accessToken"); 

    const userData = localStorage.getItem("accessToken");
       if (userData) {
      this.currentUser = JSON.parse(userData);

      this.accessToken = userAccessToken;
    } else {
      console.error('User data not found in local storage');
    }


    this.getAllPosts();
    this.getAllEvents();
  }

  
  constructor(private visiteurService: VisiteurService, private router:Router) {}

  getAllPosts(): void {
    this.visiteurService.getAllPosts().subscribe(psts => {
      this.posts = psts;
    }, error => {
      console.error('Error fetching posts:', error);
    });
  }

  getAllEvents(): void {
    this.visiteurService.getAllEvents().subscribe(evtns => {
      this.events = evtns;
    }, error => {
      console.error('Error fetching events:', error);
    });
  }

  gotoEvents(){
    this.router.navigate(["/event"]) 
  }
}
