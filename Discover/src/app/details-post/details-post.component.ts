import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { PostService } from '../post.service';
import { User } from '../models/user.model';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.css']
})
export class DetailsPostComponent {

  buttonText1 = 'Suivre';

  post!:Post;
  postId! :number;
  accessToken!: any;
  currentUser!: User;
  currentId! :number;

  constructor(private postService:PostService, private route:ActivatedRoute,private userService : UserService,private router : Router){}
  
  ngOnInit(): void {
    this.postId=+this.route.snapshot.paramMap.get('id')!;
    this.getPostById();

  }


  getPostById(){
    this.postService.getPostById(this.postId).subscribe(postt =>
      {
        this.post=postt
      })
  }

  onClick1() {
    this.buttonText1 = 'Suivi(e)';
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

}
