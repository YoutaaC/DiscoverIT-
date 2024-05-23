import { Component, ElementRef, ViewChild } from '@angular/core';
import { Post } from '../models/post.model';

import { User } from '../models/user.model';

import { Event } from '../models/event.model';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { EventService } from '../event.service';
import { PostService } from '../post.service';

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

  isOpen = false; 

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  users: User[] = [];
  posts: Post[] = [];
  events: Event[] = [];
  currentUser!: User;
  accessToken!: any;
  
  buttonText1 = 'Suivre';
  buttonText2 = 'Suivre';
  buttonText3 = 'Suivre';


  isFavori1 = false;
  isFavori2 = false;

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

  
  constructor(private userService: UserService, private router:Router,private eventService: EventService, private postService: PostService) {}

  getAllPosts(): void {
    this.postService  .getAllPosts().subscribe(psts => {
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

  onClick1() {
    this.buttonText1 = 'Suivi(e)';
  }
  onClick2() {
    this.buttonText2 = 'Suivi(e)';
  }
  onClick3() {
    this.buttonText3 = 'Suivi(e)';
  }


  goToActu(){
    this.router.navigate(["/actualite"]) 
  }
  goToEvent(){
    this.router.navigate(["/event"]) 
  }
  goToAboutUs(){
    this.router.navigate(["/apropos"]) 
  }

  isLiked1 = false;
  likeCount1 = 21; 

  get likeIconClass1() {
    return this.isLiked1 ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up';
  }

  toggleLike1() {
    this.isLiked1 = !this.isLiked1;
    if (this.isLiked1) {
      this.likeCount1++;
    } else {
      this.likeCount1--;
    }
  }

  isLiked2 = false;
  likeCount2 = 39; 

  get likeIconClass2() {
    return this.isLiked2 ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up';
  }

  toggleLike2() {
    this.isLiked2 = !this.isLiked2;
    if (this.isLiked2) {
      this.likeCount2++;
    } else {
      this.likeCount2--;
    }
  }
  
  isLiked3 = false;
  likeCount3 = 32; 

  get likeIconClass3() {
    return this.isLiked3 ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up';
  }

  toggleLike3() {
    this.isLiked3 = !this.isLiked3;
    if (this.isLiked3) {
      this.likeCount3++;
    } else {
      this.likeCount3--;
    }
  }



  get FavIconClass1() {
    return this.isFavori1 ? 'fa-solid fa-heart icon-favoris' : 'fa-regular fa-heart icon-fav';
  }
  toggleFav1() {
    this.isFavori1 = !this.isFavori1; 
  }

  get FavIconClass2() {
    return this.isFavori2 ? 'fa-solid fa-heart icon-favoris' : 'fa-regular fa-heart icon-fav';
  }
  toggleFav2() {
    this.isFavori2 = !this.isFavori2; 
  }


  gotoReservation(id :number) {
    this.router.navigate(["/reservation",id])
  }

  gotoDetailsEvent(id :number) {
    this.router.navigate(["/detailsEvent",id])
  }

  gotoDetailsPost(id :number) {
    this.router.navigate(["/detailsPost",id])
  }

  gotoProfil(){
    this.router.navigate(['profilUser']);
  }
}
