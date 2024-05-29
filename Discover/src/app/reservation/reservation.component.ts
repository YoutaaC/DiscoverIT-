import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { Event } from '../models/event.model';
import { EventService } from '../event.service';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
declare var $:any;
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{
  
  event!:Event;
  eventId! :number;
  accessToken!: any;
  currentUser!: User;
  currentId! :number;


  
  forminput!:FormGroup;
  forminput1!:FormGroup;
  forminput2!:FormGroup;
  forminput3!:FormGroup;
  forminput4!:FormGroup;


  // qrCode: string;
  
  constructor(private eventService:EventService, private route:ActivatedRoute,private userService : UserService,private formBuilder: FormBuilder,private httpClient: HttpClient ){}
  
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
        'tel':['',[Validators.required]]
      }
    );

    this.forminput4=this.formBuilder.group(
      {
        'nbr':['',[Validators.required]]
      }
    );
    this.forminput4 = this.formBuilder.group({
      password: ['', Validators.required], 
      confPass: ['', Validators.required]
    });
    
 

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





  
  afficheQR(){
    Swal.fire({
      icon: "success",
      title: "Réservation confirmée !",
      text: "Votre réservation a été confirmée.",
      confirmButtonText: "Télécharger QR code",
      imageUrl: "./../../assets/images/Reservation.png",
      imageWidth: 300,
      imageHeight: 300,
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


// afficheQR() {
//   if (!this.currentUser.firstName || !this.currentUser.lastName || !this.currentUser.email || !this.currentUser.tel) {
//     console.error('Aucune donnée d\'utilisateur à enregistrer !');
//     Swal.fire('Erreur !', 'Veuillez remplir tous les champs obligatoires.', 'error');
//     return;
//   }

//   Swal.fire({
//     title: 'Êtes-vous sûr de vouloir réserver ?',
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Réserver',
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire({
//         icon: "success",
//         title: "Réservation confirmée !",
//         text: "Votre réservation a été confirmée. Consultez l'image ci-dessous pour voir votre QR code.",
//         confirmButtonColor: '#3085d6',
//         confirmButtontext: "Télécharger le QR code",
//         imageUrl: "./../../assets/images/Reservation.png",
//         imageWidth: 300,
//         imageHeight: 300,
//         imageAlt: "QR Code de réservation"
//       });
//     }
//   });
// }



// downloadImage(imageUrl: string) {
//   this.httpClient.get(imageUrl, { responseType: 'blob' })
//     .subscribe(blob => {
//       const url = URL.createObjectURL(blob);
//       const anchor = document.createElement('a');
//       anchor.href = url;
//       anchor.download = 'image.png'; 
//       anchor.click();
//       URL.revokeObjectURL(url);
//     });


  // onSubmit() {
  //   if (this.myForm.valid) {
  //     // Extract data from the form
  //     const name = this.myForm.get('name')?.value;
  //     const email = this.myForm.get('email')?.value;

  //     // Concatenate data for QR code (adjust based on your needs)
  //     this.qrData = `Name: ${name}\nEmail: ${email}`;
  //   }
  // }

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
