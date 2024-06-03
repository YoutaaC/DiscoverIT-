import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user :User={
    id:-1,
    firstName:"",
    lastName:"",
    email:"",
    tel:"",
    password:"",
    username:"",
    creationDate: new Date() ,
    accessToken:"",
  }
  

  constructor(private router:Router,private formBuilder:FormBuilder,private userService:UserService) {} 
  
  

  // register() {
  //   this.userService.register(this.user)
  //     .subscribe(newUser => {
  //       console.log('User registered successfully:', newUser);
  //       Swal.fire({
  //         title: "L'ajout de l'utilisateur a été effectué avec succès!",
  //         icon: "success",
  //         // confirmButtonText: "Yes, delete it!"
  //       });
  //     }, error => {
  //       console.error('Error registering user:', error);
  //       Swal.fire({
  //         title: "Problème  de signUp !",
  //         text: "User deja existant",
  //         icon: "warning"
  //       });
  //     });
  // }


  register() {
    if (!this.user || !this.user.username || !this.user.email) { 
      console.error('Aucune donnée utilisateur à enregistrer!');
      Swal.fire('Erreur!', 'Remplir le formulaire', 'error');
      return;
    }

    Swal.fire({
      title: 'Êtes-vous sûr de vouloir vous inscrire?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'inscrivez-vous', 
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.register(this.user)
          .subscribe({
            next: (newUser) => {
              console.log('Utilisateur enregistré avec succès:', newUser);
              Swal.fire('Enregistré!', 'Utilisateur enregistré avec succès.', 'success');
              this.router.navigate(['adminUser']);
            },
            error: (error) => {
              console.error('Error registering user:', error);
              Swal.fire('Erreur!', 'Une erreur s\'est produite lors de l\'enregistrement.', 'error');
            }
          });
      }
    });
  }

  
  
  gotoSignin(){
    this.router.navigate(['signin']);
  }

  gotoSignup(){
    this.router.navigate(['signup']);
  }
  gotoHome(){
    this.router.navigate(['accueil']);
    console.log('Home');
  }

  forminput!:FormGroup;
  forminput1!:FormGroup;
  forminput2!:FormGroup;
  forminput3!:FormGroup;
  forminput4!:FormGroup;
  forminput5!:FormGroup;


  ngOnInit(): void {
    this.forminput=this.formBuilder.group(
      {
        'nom':['',[Validators.required]]
      }
    );

    this.forminput1=this.formBuilder.group(
      {
        'prenom':['',[Validators.required]]
      }
    );

    this.forminput2=this.formBuilder.group(
      {
        'email':['',[Validators.required,Validators.email]]
      }
    );

    this.forminput3=this.formBuilder.group(
      {
        'password':['',[Validators.required]]
      }
    );

    this.forminput4=this.formBuilder.group(
      {
        'confPass':['',[Validators.required]]
      }
    );
    this.forminput4 = this.formBuilder.group({
      password: ['', Validators.required], 
      confPass: ['', Validators.required]
    });
    this.forminput5=this.formBuilder.group(
      {
        'pseudo':['',[Validators.required]]
      }
    );

  }
}

