import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../post.service';
import { User } from '../models/user.model';
import { EventService } from '../event.service';

import { Event } from '../models/event.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{
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

  
  constructor(private userService: UserService, private router:Router,private httpClient : HttpClient, private postService : PostService,private eventService: EventService,) {}

  getAllPosts(): void {
    this.postService.getAllPosts().subscribe(psts => {
      this.posts = psts;
    }, error => {
      console.error('Error fetching posts:', error);
    });
  }

  getAllEvents(): void {
    this.eventService.getAllEvents().subscribe(evtns => {
      this.events = evtns;
    }, error => {
      console.error('Error fetching events:', error);
    });
  }



  goToActu(){
    this.router.navigate(["/V_actu"]) 
  }
  goToEvent(){
    this.router.navigate(["/V_event"]) 
  }
  goToAboutUs(){
    this.router.navigate(["/V_aboutUs"]) 
  }
  gotoSignup(){
    this.router.navigate(['signup']);
  }


wannasignup(){
  Swal.fire({
    title: "Créer un compte",
    text: "Cette fonctionnalité est accessible lorsque vous créez un compte.",
    icon: "info",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "S'inscrire"
  }).then((result) => {
    if (result.isConfirmed) {
      this.router.navigate(['signup']);
    }
  });
}



}
