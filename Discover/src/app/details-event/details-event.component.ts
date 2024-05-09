import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-event',
  templateUrl: './details-event.component.html',
  styleUrls: ['./details-event.component.css']
})
export class DetailsEventComponent {
  constructor(public router: Router){}
  gotoReservation() {
    this.router.navigate(["/reservation"])
  }
}
