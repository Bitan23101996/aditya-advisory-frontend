import { Component, OnInit } from '@angular/core';
import { PayableMobileNumber } from '../../models/payable-mobile-no.model';
import { QRCode } from '../../models/qr-code.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.scss'],
})
export class PaymentGatewayComponent implements OnInit {
  payableMobileNumberList: PayableMobileNumber[] = [];
  qrCodeList: QRCode[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getPayableMobileNumberList();
    this.getQRCodeList();
  }

  getPayableMobileNumberList(): PayableMobileNumber[] {
    this.payableMobileNumberList = this.apiService.getPayableMobileNumberList();
    return this.payableMobileNumberList;
  }

  getQRCodeList() {
    this.qrCodeList = this.apiService.getQRCodeList();
    return this.qrCodeList;
  }
}
