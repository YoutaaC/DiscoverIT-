import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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


  forminput2!:FormGroup;
  forminput3!:FormGroup;
  forminput4!:FormGroup;



  ngOnInit(): void {
    this.forminput2=this.formBuilder.group(
      {
        'oldP':['',[Validators.required]]
      }
    );

    this.forminput3=this.formBuilder.group(
      {
        'newPassword':['',[Validators.required]]
      }
    );

    this.forminput4=this.formBuilder.group(
      {
        'confPass':['',[Validators.required]]
      }
    );
    this.forminput4 = this.formBuilder.group({
      newPassword: ['', Validators.required], 
      confPass: ['', Validators.required]
    });

    this.currentuserId=+this.route.snapshot.paramMap.get('id')!;
    this.getUser();

 

  }

  




  


  constructor(private userService: UserService, private route: ActivatedRoute ,private router:Router,private formBuilder:FormBuilder) {}

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
      title: 'Êtes-vous sûr(e) de vouloir changer le mot de passe ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Changer', 
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.currentUser) { 
          this.userService.updateUser(this.currentUser.id, this.currentUser)
            .subscribe(updatedUser => {
              console.log('Updated User:', updatedUser); 
              Swal.fire('Mis à jour !', 'Utilisateur mis à jour avec succès.', 'success');
             
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
