import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var createGoogleEvent: any;


@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit{
constructor(private fb:FormBuilder){}
appointmentForm!:FormGroup;
 ngOnInit(): void {
   this.appointmentForm= this.fb.group({
    appointmentTime: ['',[Validators.required]],
    email: ['',[Validators.required,Validators.email]],
   });
 }

 schedueleMeeting( formData: any){
  const eventDetails=this.appointmentForm.value
  console.log(eventDetails);
  createGoogleEvent(formData);
 }
}
