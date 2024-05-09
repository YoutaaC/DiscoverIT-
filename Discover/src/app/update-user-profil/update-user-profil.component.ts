import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  
  
  
  confirmUpdate(){
    $('#updateModal').modal('show');
  
  }
  
  
  
  closeUpdate()
  {
    $('#updateModal').modal('hide');
  
  }
  
  updateUser(){
  if(this.currentUser){
    this.userService.updateUser(this.currentUserId,this.currentUser).subscribe(updateUser=>
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