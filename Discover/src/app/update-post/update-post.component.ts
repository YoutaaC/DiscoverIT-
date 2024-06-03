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
      title: 'Êtes-vous sûr de vouloir mettre à jour cette publication ?', 
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Mettre à jour', 
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.post) { 
          this.postService.updatePostPut(this.postId, this.post)
            .subscribe(updatedPost => {
              console.log('Updated Post:', updatedPost); 
              Swal.fire('Mise à jour !', 'Publication mise à jour avec succès.', 'success');
             
            }, (error) => {
              console.error('Error updating post:', error);
              Swal.fire('Erreur !', 'Une erreur s\'est produite lors de la mise à jour.', 'error');
            });
        } else {
          console.error('Aucune donnée de publication à mettre à jour !'); 
        }
      }
    });
  }
}
