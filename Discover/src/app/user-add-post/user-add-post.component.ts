import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { Post } from '../models/post.model';
import { PostService } from '../post.service';
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
  constructor(private userService:UserService, private route:ActivatedRoute, private router:Router,private postService:PostService){}
  newPost: any = {
    title: '',
    mini_body: '',
    body: '',
    type: '',
    creationDate: new Date()
  };
  PostToAdd!:Post;
    createPost() {
      if (this.newPost.title && this.newPost.body && this.newPost.type) {
        this.postService.createPosts(this.newPost)
          .subscribe(createdPost => {
            console.log('Post added successfully:', createdPost);
            Swal.fire({
              title: "success",
              text: "Post added successfully",
              icon: "success"
            });
          }, error => {
            console.error('Error adding post:', error);
            Swal.fire({
              title: "Error !",
              text: "Error adding Event",
              icon: "error"
            });
          });
      } else {
        console.error('Title and body are required.');
       
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
