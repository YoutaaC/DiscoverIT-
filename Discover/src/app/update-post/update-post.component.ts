import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post.model';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
declare var $:any;
@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent {
  post!:Post;
  postId! :number;

  
  constructor(private postService:PostService, private route:ActivatedRoute){}
  
  ngOnInit(): void {
    this.postId=+this.route.snapshot.paramMap.get('id')!;
    this.getPost();
  }
  
  getPost(){
    this.postService.getPostById(this.postId).subscribe(postp =>
      {
        this.post=postp
      })
  }
  
  
  confirmUpdate() { 
    Swal.fire({
      title: 'Are you sure you want to update this post?', 
  
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!', 
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.post) { 
          this.postService.updatePostPut(this.postId, this.post)
            .subscribe(updatedPost => {
              console.log('Updated Post:', updatedPost); 
              Swal.fire('Updated!', 'Post updated successfully.', 'success');
             
            }, (error) => {
              console.error('Error updating post:', error);
              Swal.fire('Error!', 'An error occurred during update.', 'error');
            });
        } else {
          console.error('No post data to update!'); 
        }
      }
    });
  }
}
