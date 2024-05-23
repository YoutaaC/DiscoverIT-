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
  // const eventDetails=this.appointmentForm.value
  // console.log(eventDetails);
  // createGoogleEvent(formData);
  let appointmentTime = new Date(this.appointmentForm.value.appointmentTime)

const startTime = appointmentTime. toISOString().slice(0, 18) + '-01:00';
const endTime = this. getEndTime(appointmentTime) ;
const eventDetails = {
email: this.appointmentForm.value.email,
startTime: startTime,
endTime:endTime,
 };
 console.info(eventDetails);
}

 getEndTime(appointmentTime: Date){
  appointmentTime.setHours(appointmentTime.getHours() + 1);
  const endTime =appointmentTime.toISOString().slice(0,18)+'-01:00';
 }
 
}
