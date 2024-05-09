import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { Event } from '../models/event.model';
import { EventService } from '../event.service';
import { UserService } from '../user.service';
declare var $:any;
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{
  // user!:User;
  // userId! :number;
  event!:Event;
  eventId! :number;
  accessToken!: any;
  currentUser!: User;
  currentId! :number;

  
  constructor(private eventService:EventService, private route:ActivatedRoute,private userService : UserService){}
  
  ngOnInit(): void {
    this.eventId=+this.route.snapshot.paramMap.get('id')!;
    this.getEventById();
  }




  getEventById(){
    this.eventService.getEventById(this.eventId).subscribe(eventt =>
      {
        this.event=eventt
      })
  }
  
  getUser(){
    this.userService.getUserById(this.currentId).subscribe(userp =>
      {
        this.currentUser=userp
      })
  }


  // onPhoneKeyPress(event: KeyboardEvent) {
  //   const charCode = event.charCode  event.keyCode;
  //   if (charCode < 48  charCode > 57) {
  //     event.preventDefault();
  //   }
  // }

  // genererQRCode() {
  //   if (!this.firstName || !this.lastName || !this.title || !this.type) {
  //     alert("Veuillez saisir toutes les informations requises !");
  //     return;
  //   }
  
  //   // Génération des données du QR code en format JSON
  //   this.qrCodeData = JSON.stringify({
  //     nom: this.firstName,
  //     prenom: this.lastName,
  //     nomEvenement: this.title,
  //     typeEvenement: this.type // Ensure property name matches
  //   });
  
  //   // Génération de l'URL du QR code
  //   this.qrCodeImage = 'https://api.qrserver.com/v1/generate?data=' + encodeURIComponent(this.qrCodeData) + '&size=200&margin=10';
  // }
  // telechargerQRCode() {
  //   const link = document.createElement('a');
  //   link.href = this.qrCodeImage;
  //   link.download = 'reservation.png';
  //   link.click();
  // }
}
