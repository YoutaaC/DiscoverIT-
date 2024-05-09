import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { QRCodeModule } from 'ngx-qrcode';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css'],
  
})

export class QrcodeComponent {
  qrData: string = ''; // To receive data from the form component

  onQrDataChange(event: Event) {
    const data = (event as any).data; // Assuming the event object has a 'data' property
    this.qrData = data;
  }
}
