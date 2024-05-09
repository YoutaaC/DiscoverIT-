import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

declare var $:any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user :User={
    id:-1,
    firstName:"",
    lastName:"",
    email:"",
    tel:"",
    password:"",
    username:"",
    creationDate: new Date() ,
    accessToken:"",// Set default to current date
  }
  

  constructor(private router:Router,private formBuilder:FormBuilder,private userService:UserService) {} 
  
  

  register() {
    this.userService.register(this.user)
      .subscribe(newUser => {
        console.log('User registered successfully:', newUser);
        $('#ConfirmeModal').modal('show');
      }, error => {
        console.error('Error registering user:', error);
        $('#dejaModal').modal('show');
      });
  }

    closeModal()
  {
    $('#ConfirmeModal').modal('hide');
    window.location.reload();
  
  }

  closedejaModal()
  {
    $('#dejaModal').modal('hide');
    window.location.reload();
  
  }

  closedisabledModal()
  {
    $('#disabledModal').modal('hide');
    window.location.reload();
  
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
