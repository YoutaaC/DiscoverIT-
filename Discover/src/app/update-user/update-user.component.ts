import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
declare var $:any;
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  user!:User;
  userId! :number;
  
  constructor(private userService:UserService, private route:ActivatedRoute){}
  
  ngOnInit(): void {
    this.userId=+this.route.snapshot.paramMap.get('id')!;
    this.getUser();
  }
  
  getUser(){
    this.userService.getUserById(this.userId).subscribe(userp =>
      {
        this.user=userp
      })
  }
  
  
  
  confirmUpdate() {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir mettre à jour ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Mettre à jour', 
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.user) { 
          this.userService.updateUser(this.userId, this.user)
            .subscribe(updateUser => {
              console.log('Updated:', updateUser); 
              Swal.fire('Mise à jour !', 'Utilisateur mis à jour avec succès.', 'success');
             
            }, (error) => {
              console.error('Error updating user:', error);
              Swal.fire('Erreur !', 'Une erreur s\'est produite lors de la mise à jour.', 'error');
            });
        } else {
          console.error('Aucune donnée utilisateur à mettre à jour !'); 
        }
      }
    });
  }


  
  
}


