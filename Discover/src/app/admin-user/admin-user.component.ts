import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
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


  UserToDelete!:User;
  confirmDelete(user:User)
  {
  
  $('#deleteModal').modal('show');
  this.UserToDelete=user;
  
  
  }
  
  closeDelete()
  {
    $('#deleteModal').modal('hide');
    window.location.reload();
  
  }



  deleteUser()
  {
    this.userService.deleteUser(this.UserToDelete.username)
    .subscribe(() =>{
      console.log("deleted")
      $('#deleteModal').modal('hide');
      window.location.reload();
  
    })
  
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
