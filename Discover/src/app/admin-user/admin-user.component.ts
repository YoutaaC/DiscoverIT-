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
    title: 'Are you sure you want to delete this user?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#32839B',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      this.userService. deleteUser(this.userToDelete.username)
        .subscribe((response) => {
          console.log('Deleted:', response);                                       
          Swal.fire('Deleted!', 'User deleted successfully.', 'success');
          
        }, (error) => {
          console.error('Error deleting user:', error);
          Swal.fire('Error!', 'An error occurred during deletion.', 'error');
          
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


  
}
