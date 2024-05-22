import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  @ViewChild('passwordInput') passwordInput!: ElementRef;
    passIcon: HTMLImageElement;


username:String="";
password:String="";

  constructor(private router : Router,private renderer: Renderer2,private formBuilder:FormBuilder,private userService: UserService) {
    this.passIcon = document.getElementById('pass-icon') as HTMLImageElement;
  }

  togglePasswordVisibility(passwordInput: HTMLInputElement): void {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      this.passIcon.src = './../../assets/images/iconmonstr-eye-filled-240.png';
    } else {
      passwordInput.type = 'password';
      this.passIcon.src = './../../assets/images/iconmonstr-eye-off-filled-240.png';
    }
  }

  forminput!:FormGroup;

  ngOnInit(): void {

    this.forminput=this.formBuilder.group(
      {
        'email':['',[Validators.required,Validators.email]]
      }
    );


  }

  gotoSignin(){
    this.router.navigate(['signin']);
  }

  gotoSignup(){
    this.router.navigate(['signup']);
  }

login(): void {
  const loginData = {
    username: this.username,
    password: this.password
  };
this.userService.login(loginData)
  .subscribe(user => {
    if (user) { 
      console.log('Login successful');

      if (this.username == 'admin' && this.password == 'admin') {  
        this.router.navigate(['/adminDashboard']);
      } else {
        this.router.navigate(['/home']); 
      }

      localStorage.setItem('accessToken', JSON.stringify(user)); 
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      console.log('Invalid username or password');
      
    }
  }, error => {
    console.error('Error occurred during login:', error);
    Swal.fire({
      title: "Problème  de Connection !",
      text: "Invalid username or password",
      icon: "info"
    });
  });
}


  }
  
  