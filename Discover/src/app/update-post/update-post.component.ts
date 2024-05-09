import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post.model';
import { ActivatedRoute } from '@angular/router';
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
  
  
  confirmeModif(){
    $('#updateModal').modal('show');
  
  }
  
  closeModif()
  {
    $('#updateModal').modal('hide');
  
  }
  
  updatePost(){
  if(this.post){
    this.postService.updatePostPut(this.postId,this.post).subscribe(updatePost=>
      {
        console.log("Update",updatePost)
        $('#updateModal').modal('hide');
  
      })
  }
  
  }
}
