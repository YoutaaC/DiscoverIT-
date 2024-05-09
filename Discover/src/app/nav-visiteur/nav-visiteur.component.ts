import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-nav-visiteur',
  templateUrl: './nav-visiteur.component.html',
  styleUrls: ['./nav-visiteur.component.css']
})
export class NavVisiteurComponent {
constructor(private router:Router){}
gotoSignup(){
  this.router.navigate(['signup']);
}
}
