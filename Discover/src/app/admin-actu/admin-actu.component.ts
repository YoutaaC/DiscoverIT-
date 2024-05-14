import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../post.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import Swal from 'sweetalert2'

declare var $:any;
@Component({
  selector: 'app-admin-actu',
  templateUrl: './admin-actu.component.html',
  styleUrls: ['./admin-actu.component.css']
})
export class AdminActuComponent implements OnInit {
  currentUser!: User;
  posts: Post[] = [];
  users: User[] = [];
  postToDelete!: Post;
  accessToken!:any;
  showOkButton: boolean = true;
  ngOnInit(): void {
    const userAccessToken = localStorage.getItem('accessToken'); 
    const userData = localStorage.getItem('accessToken');
       if (userData) {
      this.currentUser = JSON.parse(userData);
      this.accessToken = userAccessToken;
    } else {
      console.error('User data not found in local storage');
    }
    this.posts.forEach(post => post.isConfirmed = false); // Set initial confirmation state
    this.getAllPosts();
    this.getAllUsers();
  }
  constructor(private postService: PostService, private router: Router,private userService: UserService) { }
  getAllPosts(): void {
    this.postService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    }, error => {
      console.error('Error fetching users:', error);
    });
  }
  gotoaddpost(){
    this.router.navigate(["/createPost"]) 
  }
  updatePost(id :number){
    this.router.navigate(["/updatePost",id])
  }
  confirmDelete(post: Post) {
    this.postToDelete = post;
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer cette publication?',
 
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#32839B',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.postService.deletePost(this.postToDelete.id)
          .subscribe((response) => {
            console.log('Deleted:', response); 
            Swal.fire('Deleted!', 'Post deleted successfully.', 'success');
           
          }, (error) => {
            console.error('Error deleting post:', error);
            Swal.fire('Error!', 'An error occurred during deletion.', 'error');
          });
      }
    });
  }

  // closeDelete(){
  //   $('#deleteModal').modal('hide');
  //   window.location.reload();
  // }
  // deletePost()
  // {
  //   this.postService.deletePost(this.PostToDelete.id)
  //   .subscribe(() =>{
  //     console.log("deleted")
  //     $('#deleteModal').modal('hide');
  //     window.location.reload();
  
  //   })
  // }
  onOkButtonClick(post: Post) {
    post.isConfirmed = true;
  }
  logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessToken");
    window.location.reload();
  }
}
