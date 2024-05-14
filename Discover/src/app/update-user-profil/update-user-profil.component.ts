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
  currentUser!:User;
  currentUserId! :number;
  
  constructor(private userService:UserService, private route:ActivatedRoute, private router:Router){}
  
  ngOnInit(): void {
    this.currentUserId=+this.route.snapshot.paramMap.get('id')!;
    this.getUser();
  }
  
  getUser(){
    this.userService.getUserById(this.currentUserId).subscribe(userp =>
      {
        this.currentUser=userp
      })
  }
  
  
  
  confirmUpdate() {
    Swal.fire({
      title: 'Are you sure you want to update?', 
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!', 
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.currentUser) {
          this.userService.updateUser(this.currentUserId, this.currentUser)
            .subscribe(updateUser => {
              console.log('Updated:', updateUser); 
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