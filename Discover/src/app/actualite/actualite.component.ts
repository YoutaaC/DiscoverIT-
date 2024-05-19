import { Component } from '@angular/core';
import { VisiteurService } from '../visiteur.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent {
  users: User[] = [];
  posts: Post[] = [];
  currentUser!: User;
  accessToken!: any;


  isLiked1 = false;
  isLiked2 = false;
  isLiked3 = false;
 
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
  }

    
  constructor(private visiteurService: VisiteurService, private router:Router) {}

  getAllPosts(): void {
    this.visiteurService.getAllPosts().subscribe(psts => {
      this.posts = psts;
    }, error => {
      console.error('Error fetching posts:', error);
    });
  }

  get likeIconClass1() {
    return this.isLiked1 ? 'fa-solid fa-thumbs-up ' : 'fa-regular fa-thumbs-up';
  }
  toggleLike1() {
    this.isLiked1 = !this.isLiked1; 
  }

  get likeIconClass2() {
    return this.isLiked2 ? 'fa-solid fa-thumbs-up ' : 'fa-regular fa-thumbs-up';
  }
  toggleLike2() {
    this.isLiked2 = !this.isLiked2; 
  }

  get likeIconClass3() {
    return this.isLiked3 ? 'fa-solid fa-thumbs-up ' : 'fa-regular fa-thumbs-up';
  }
  toggleLike3() {
    this.isLiked3 = !this.isLiked3; 
  }

  actuBigdata(){
    this.router.navigate(['actualite/BigData']);
  }
  actutous(){
    this.router.navigate(['actualite']);
  }
  actusecurite(){
    this.router.navigate(['actualite/Securite']);
  }
  actudev(){
    this.router.navigate(['actualite/Developpement']);
  }
  actuai(){
    this.router.navigate(['actualite/Ai']);
  }
  actutechweb(){
    this.router.navigate(['actualite/Technologie Web']);
  }
  actuEcomm(){
    this.router.navigate(['actualite/E-commerce']);
  }
}
