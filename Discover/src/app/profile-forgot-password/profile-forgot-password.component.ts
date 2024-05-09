import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-profile-forgot-password',
  templateUrl: './profile-forgot-password.component.html',
  styleUrls: ['./profile-forgot-password.component.css']
})
export class ProfileForgotPasswordComponent {
  accessToken!: any;
  currentUser!: User;
  currentuserId! :number;
  users: User[] = [];
  ngOnInit(): void {
    this.currentuserId=+this.route.snapshot.paramMap.get('id')!;
    this.getUser();
  }

  
  constructor(private userService: UserService, private route: ActivatedRoute ,private router:Router) {}

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    }, error => {
      console.error('Error fetching users:', error);
    });
  }

  getUser(){
    this.userService.getUserById(this.currentuserId).subscribe(userp =>
      {
        this.currentUser=userp
      })
  }
  
  
  
  confirmUpdate(){
    $('#updateModal').modal('show');
  
  }
  
  
  
  closeUpdate()
  {
    $('#updateModal').modal('hide');
  
  }
  
  updateUser(){
  if(this.currentUser){
    this.userService.updateUser(this.currentuserId,this.currentUser).subscribe(updateUser=>
      {
        console.log("Update",updateUser)
        $('#updateModal').modal('hide');
  
      })
  }
  
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
