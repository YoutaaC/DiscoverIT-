import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-actu-visiteur2',
  templateUrl: './actu-visiteur2.component.html',
  styleUrls: ['./actu-visiteur2.component.css']
})
export class ActuVisiteur2Component {
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

    
  constructor(private postService: PostService, private router:Router) {}

  getAllPosts(): void {
    this.postService.getAllPosts().subscribe(psts => {
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
    this.router.navigate(['V_actu/BigData']);
  }
  actutous(){
    this.router.navigate(['V_actu']);
  }
  actusecurite(){
    this.router.navigate(['V_actu/Securite']);
  }
  actudev(){
    this.router.navigate(['V_actu/Developpement']);
  }
  actuai(){
    this.router.navigate(['V_actu/Ai']);
  }
  actutechweb(){
    this.router.navigate(['V_actu/Technologie Web']);
  }
  actuecommerce(){
    this.router.navigate(['V_actu/E-commerce']);
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
