import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  forminput!:FormGroup;
  forminput1!:FormGroup;
  forminput2!:FormGroup;
  forminput3!:FormGroup;
  forminput5!:FormGroup;

  constructor(private router:Router,private formBuilder:FormBuilder) {} 
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
        'objet':['',[Validators.required]]
      }
    );

   

    this.forminput5=this.formBuilder.group(
      {
        'message':['',[Validators.required]]
      }
    );

  }
}
