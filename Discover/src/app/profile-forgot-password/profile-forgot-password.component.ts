import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
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
  
  
  
  confirmUpdate() {
    Swal.fire({
      title: 'Êtes-vous sure de vouloir changer le mot de passe ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'oui, changer!', 
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.currentUser) { 
          this.userService.updateUser(this.currentUser.id, this.currentUser)
            .subscribe(updatedUser => {
              console.log('Updated User:', updatedUser); 
              Swal.fire('Updated!', 'User updated successfully.', 'success');
             
            }, (error) => {
              console.error('Error updating user:', error);
              Swal.fire('Error!', 'An error occurred during update.', 'error');
            });
        } else {
          console.error('No user data to update!'); 
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
