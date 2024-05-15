import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { QRCodeModule } from 'ngx-qrcode';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css'],
  
})

export class QrcodeComponent {
  qrData: string = ''; 

  onQrDataChange(event: Event) {
    const data = (event as any).data;
    this.qrData = data;
  }
}
