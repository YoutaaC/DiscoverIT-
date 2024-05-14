import { Component } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../post.service';
import { User } from '../models/user.model';
import { AuthenticationService } from '../authentication.service';
import Swal from 'sweetalert2'
declare var $:any;
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
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
constructor(private postService: PostService,private autService:AuthenticationService){}
//add new post :
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

}
