import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SentEmailModel } from '../models/sent-email.model';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  baseUrl: string = 'http://localhost:4300';

  constructor(private http: HttpClient) {}

  sendEmail(mailBody: SentEmailModel) {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(`${this.baseUrl}/email`, mailBody, headers);
  }
}
