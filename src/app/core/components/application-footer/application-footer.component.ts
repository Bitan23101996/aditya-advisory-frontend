import { Component, OnInit } from '@angular/core';
import { SocialMediaIconModel } from '../../models/social-media-icon.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-application-footer',
  templateUrl: './application-footer.component.html',
  styleUrls: ['./application-footer.component.scss']
})
export class ApplicationFooterComponent implements OnInit {

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
