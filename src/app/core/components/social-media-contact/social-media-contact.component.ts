import { Component, OnInit } from '@angular/core';
import { SocialMediaIconModel } from '../../models/social-media-icon.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-social-media-contact',
  templateUrl: './social-media-contact.component.html',
  styleUrls: ['./social-media-contact.component.scss']
})
export class SocialMediaContactComponent implements OnInit {

  socialMediaIconList:SocialMediaIconModel[] = [];

  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getSocialMediaIconList();
  }

  // Get Social Media Icon List
  getSocialMediaIconList(){
    this.socialMediaIconList = this.apiService.getSocialMediaIconList();
    return this.socialMediaIconList;
  }
}
