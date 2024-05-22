import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';

  constructor(private router: Router) {}

  nextStep() {
    if (this.email === 'benothmaneyaa@gmail.com') {
      this.router.navigate(["/newPassword"]);
      Swal.fire({
        title: "Succès",
        text: "Votre adresse email est correcte. Veuillez définir un nouveau mot de passe.",
        icon: "success"
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Adress mail incorrect",
        icon: "error"
      });
    }
  }
}
