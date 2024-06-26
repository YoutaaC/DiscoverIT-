import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'
declare var $:any;
@Component({
  selector: 'app-update-user-profil',
  templateUrl: './update-user-profil.component.html',
  styleUrls: ['./update-user-profil.component.css']
})
export class UpdateUserProfilComponent {
  // currentUser!:User;
  // currentUserId! :number;
  userId! :number;
  user : User={
    id:-1,
    firstName:"",
    lastName:"",
    username:"",
    email:"", 
    tel:"",
    password:"",  
    creationDate: new Date() ,
    accessToken:"",
  }


  constructor(private userService:UserService, private route:ActivatedRoute, private router:Router){}
  
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
  

  
  logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessToken");
    window.location.reload();
    this.router.navigate(["/"])
  }
}