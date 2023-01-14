import { Component, OnInit } from '@angular/core';
import { TrustedBrandImg } from '../../models/trusted-brand-img.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-trusted-brand',
  templateUrl: './trusted-brand.component.html',
  styleUrls: ['./trusted-brand.component.scss'],
})
export class TrustedBrandComponent implements OnInit {
  lifeIncImageList: TrustedBrandImg[] = [];
  healthIncImageList: TrustedBrandImg[] = [];
  mutualFundImageList: TrustedBrandImg[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getAllTrustedBrandImageList();
  }
  getAllTrustedBrandImageList() {
    this.getLifeIncImageList();
    this.getHealthIncImageList();
    this.getMutualFundImageList();
  }

  //Get Life Insurence Image List
  getLifeIncImageList() {
    this.lifeIncImageList = this.apiService.getLifeIncImageList();
    return this.lifeIncImageList;
  }

  //Get Health Insurence Image List
  getHealthIncImageList() {
    this.healthIncImageList = this.apiService.getHealthIncImageList();
    return this.healthIncImageList;
  }

  //Get Mutual Fund Image List
  getMutualFundImageList() {
    this.mutualFundImageList = this.apiService.getMutualFundImageList();
    return this.mutualFundImageList;
  }
}
