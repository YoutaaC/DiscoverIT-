import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
declare var $:any;
@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit{
  users: User[] = [];
  currentUser!: User;
  accessToken!: any;

  userToDelete!: User;


  // username!: string;
  // id!: number;
  // email!: string;

  ngOnInit(): void {
    const userAccessToken = localStorage.getItem("accessToken"); 

    const userData = localStorage.getItem("accessToken");
       if (userData) {
      this.currentUser = JSON.parse(userData);

      this.accessToken = userAccessToken;
    } else {
      console.error('User data not found in local storage');
    }


    this.getAllUsers();
  }

  
  constructor(private userService: UserService, private router: Router) {}

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    }, error => {
      console.error('Error fetching users:', error);
    });
  }

confirmDelete(user: User) {
  this.userToDelete = user;

  Swal.fire({
    title: 'Êtes-vous sûr de vouloir supprimer cet utilisateur ?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#32839B',
    cancelButtonColor: '#d33',
    confirmButtonText: ' supprimer',
    cancelButtonText: 'Annuler'
  }).then((result) => {
    if (result.isConfirmed) {
      this.userService. deleteUserByUsername(this.userToDelete.username)
        .subscribe((response) => {
          console.log('Deleted:', response);                                       
          Swal.fire('Supprimé!', 'Utilisateur supprimé avec succès.', 'success');
          
        }, (error) => {
          console.error('Error deleting user:', error);
          Swal.fire('Erreur!', 'Une erreur s\'est produite lors de la suppression.', 'error');
          
        });
    }
  });
}
  



  updateUser(id :number)
  {
  this.router.navigate(["/update",id])
  }
  

  gotoSignup(){
    this.router.navigate(["/signup"])
  }
  logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessToken");
    window.location.reload();
    this.router.navigate(["/signin"])
  }

  // search(): void {
  //   this.userService.searchUsers(this.username, this.id, this.email)
  //     .subscribe(users => this.users = users);
  // }
  
}
