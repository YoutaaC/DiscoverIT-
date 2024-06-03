import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { Post } from '../models/post.model';
import { PostService } from '../post.service';
import { AuthenticationService } from '../authentication.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-user-add-post',
  templateUrl: './user-add-post.component.html',
  styleUrls: ['./user-add-post.component.css']
})
export class UserAddPostComponent {
  currentUserId! :number;
  currentUser: User | null = null;
  posts: Post[] = [];
  accessToken!:any;
  newPost: any = {
    title: '',
    mini_body: '',
    body: '',
    type: '',
    creationDate: new Date()
  };
  ngOnInit(): void {
    const userAccessToken = localStorage.getItem('accessToken'); 
    const userData = localStorage.getItem('accessToken');
       if (userData) {
      this.currentUser = JSON.parse(userData);
      this.accessToken = userAccessToken;
    } else {
      console.error('User data not found in local storage');
    }
    this.createPost();
  }
  constructor(private userService:UserService, private route:ActivatedRoute, private router:Router,private postService:PostService,private autService:AuthenticationService){}

  PostToAdd!:Post;
    createPost() {
      if (this.newPost.title && this.newPost.body ) {
        this.postService.createPosts(this.newPost)
          .subscribe(createdPost => {
            console.log('Post added successfully:', createdPost);
            Swal.fire({
              title: "Succès",
              text: "Publication ajoutée avec succès",
              icon: "success"
            });
          }, error => {
            console.error('Error adding post:', error);
            Swal.fire({
              title: "Error !",
              text: "Erreur lors de l'ajout de la publication",
              icon: "error"
            });
          });
      } else {
        console.error('Title et body sont requis.');
       
      }
    }
  logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessToken");
    window.location.reload();
    this.router.navigate(["/"])
  }

  gotoprofil(){
    this.router.navigate(["/profile"])
  }
 
}
