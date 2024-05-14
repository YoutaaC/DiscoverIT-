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
      title: 'Are you sure you want to update?',
      text: "This action cannot be undone!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!', 
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.user) { 
          this.userService.updateUser(this.userId, this.user)
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


  
  
}
