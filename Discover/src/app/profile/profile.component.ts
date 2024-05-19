import { Component } from '@angular/core';
import { VisiteurService } from '../visiteur.service';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
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

  
  constructor(private visiteurService: VisiteurService, private router:Router) {}

  getAllPosts(): void {
    this.visiteurService.getAllPosts().subscribe(psts => {
      this.posts = psts;
    }, error => {
      console.error('Error fetching posts:', error);
    });
  }

  logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessToken");
    window.location.reload();
    this.router.navigate(["/"])
  }


  isLiked1 = false;
  likeCount1 = 21; // Initial count of likes

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
  likeCount2 = 21; // Initial count of likes

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
  likeCount3 = 21; // Initial count of likes

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

  gotoDetailsPost(id :number) {
    this.router.navigate(["/detailsPost",id])
  }
}
