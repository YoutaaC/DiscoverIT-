import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { User } from '../models/user.model';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-actu-techweb',
  templateUrl: './actu-techweb.component.html',
  styleUrls: ['./actu-techweb.component.css']
})
export class ActuTechwebComponent {
  users: User[] = [];
  posts: Post[] = [];
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
  }

    
  constructor(private userervice: UserService, private router:Router,private postService : PostService) {}

  getAllPosts(): void {
    this.postService.getAllPosts().subscribe(psts => {
      this.posts = psts;
    }, error => {
      console.error('Error fetching posts:', error);
    });
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
  likeCount2 = 10; // Initial count of likes

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
  likeCount3 = 41; // Initial count of likes

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
