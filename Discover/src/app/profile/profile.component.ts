import { Component } from '@angular/core';
// import { VisiteurService } from '../visiteur.service';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { PostService } from '../post.service';

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

  
  constructor(private userService: UserService, private router:Router,private postService : PostService) {}

  getAllPosts(): void {
    this.postService.getAllPosts().subscribe(psts => {
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



  
  isLiked4 = false;
  likeCount4 = 21; // Initial count of likes

  get likeIconClass4() {
    return this.isLiked4 ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up';
  }

  toggleLike4() {
    this.isLiked4 = !this.isLiked4;
    if (this.isLiked4) {
      this.likeCount4++;
    } else {
      this.likeCount4--;
    }
  }

  isLiked5 = false;
  likeCount5 = 21; // Initial count of likes

  get likeIconClass5() {
    return this.isLiked5 ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up';
  }

  toggleLike5() {
    this.isLiked5 = !this.isLiked5;
    if (this.isLiked5) {
      this.likeCount5++;
    } else {
      this.likeCount5--;
    }
  }

  isLiked6 = false;
  likeCount6 = 21; // Initial count of likes

  get likeIconClass6() {
    return this.isLiked6 ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up';
  }

  toggleLike6() {
    this.isLiked6 = !this.isLiked6;
    if (this.isLiked6) {
      this.likeCount6++;
    } else {
      this.likeCount6--;
    }
  }

  gotoDetailsPost(id :number) {
    this.router.navigate(["/detailsPost",id])
  }

  gotoadd() {
    this.router.navigate(["/UserAddPost"])
  }
}
