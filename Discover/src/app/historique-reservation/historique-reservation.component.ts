import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { Event } from '../models/event.model';
import Swal from 'sweetalert2'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-historique-reservation',
  templateUrl: './historique-reservation.component.html',
  styleUrls: ['./historique-reservation.component.css']
})
export class HistoriqueReservationComponent {
  events: Event[] = [];
  accessToken!: any;
  currentUser!: User;

  ngOnInit(): void {
    const userAccessToken = localStorage.getItem("accessToken"); 

    const userData = localStorage.getItem("accessToken");
       if (userData) {
      this.currentUser = JSON.parse(userData);
      this.accessToken = userAccessToken;
    } else {
      console.error('User data not found in local storage');
    }
    this.getAllEvents();

  }
  constructor(private eventService: EventService, private router: Router, private httpClient : HttpClient) {}

  getAllEvents(): void {
    this.eventService.getAllEvents().subscribe(evnt => {
      this.events = evnt;
    }, error => {
      console.error('Error fetching events:', error);
    });
  }

  isOpen = false; 

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessToken");
    window.location.reload();
    this.router.navigate(["/"])
  }


  affiche(){
    Swal.fire({
          title: "Votre QR Code ",
          text: "Votre qr code de cette evenement",
          confirmButtonText: "Télécharger QR code",
          imageUrl: "./../../assets/images/Reservation.png",
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: "QR Code"
        }).then((result) => {
          if (result.isConfirmed) {
            this.downloadImage("./../../assets/images/Reservation.png");
          }
        });
  }


  
  downloadImage(url: string) {
    this.httpClient.get(url, { responseType: 'blob' }).subscribe(blob => {
        // Create a link element
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'Reservation.jpg'; // Set the download filename
  
        // Append link to the body, click it, and then remove it
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, error => {
        console.error('Error downloading the image: ', error);
    });
  }

}
