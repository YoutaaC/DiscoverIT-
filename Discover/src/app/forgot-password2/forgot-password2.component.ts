import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-forgot-password2',
  templateUrl: './forgot-password2.component.html',
  styleUrls: ['./forgot-password2.component.css']
})
export class ForgotPassword2Component {
  mp: string = '';
  cmp: string = '';
constructor(private router:Router){}
nextStep() {
  const motDePasseValide = this.mp === 'eya' && this.cmp === 'eya';

  if (motDePasseValide) {
    this.router.navigate(["/signin"]);
    Swal.fire({
      title: "Succès", 
      text: "Mot de passe initialisé avec succès", 
      icon: "success"
    });
  } else {
    Swal.fire({
      title: "Erreur",
      text: "Mot de passe incorrect", 
      icon: "error"
    });
  }
}
}
