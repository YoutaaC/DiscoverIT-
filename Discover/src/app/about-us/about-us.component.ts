import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  buttonText1 = 'Suivre';
  buttonText2 = 'Suivre';
  buttonText3 = 'Suivre';

  onClick1() {
    this.buttonText1 = 'Suivi(e)';
  }
  onClick2() {
    this.buttonText2 = 'Suivi(e)';
  }
  onClick3() {
    this.buttonText3 = 'Suivi(e)';
  }
}
