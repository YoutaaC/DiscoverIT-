import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-about-visiteur',
  templateUrl: './about-visiteur.component.html',
  styleUrls: ['./about-visiteur.component.css']
})
export class AboutVisiteurComponent {

  constructor( private router:Router) {}

  wannasignup(){
    Swal.fire({
      title: "Créer un compte",
      text: "Cette fonctionnalité est accessible lorsque vous créez un compte.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "S'inscrire"
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['signup']);
      }
    });
  }

}



