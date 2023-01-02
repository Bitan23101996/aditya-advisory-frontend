import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsurenceItem } from '../models/insurence-item.model';
import { ServiceItem } from '../models/service-item.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  serviceItemList: ServiceItem[] = [
    {
      serviceItemId: 1,
      serviceItemLabel: 'Health Insurance & Mediclaim',
      isItemChecked: false,
      serviceItemIconClass: 'fa-notes-medical'
    },
    {
      serviceItemId: 2,
      serviceItemLabel: 'Life Insurance',
      isItemChecked: false,
      serviceItemIconClass: 'fa-heart-pulse'
    },
    
    {
      serviceItemId: 3,
      serviceItemLabel: 'Fire & Burglary Insurance',
      isItemChecked: false,
      serviceItemIconClass: 'fa-fire'
    },
    {
      serviceItemId: 4,
      serviceItemLabel: 'Home, Shop & Office Insurance',
      isItemChecked: false,
      serviceItemIconClass: 'fa-house-user'
    },
    {
      serviceItemId: 5,
      serviceItemLabel: 'Bike, Motor Insurance',
      isItemChecked: false,
      serviceItemIconClass: 'fa-motorcycle'
    },
    {
      serviceItemId: 6,
      serviceItemLabel: 'Group Insurance',
      isItemChecked: false,
      serviceItemIconClass: 'fa-group-arrows-rotate'
    },
    {
      serviceItemId: 7,
      serviceItemLabel: 'Home Loan & LAP',
      isItemChecked: false,
      serviceItemIconClass: 'fa-building'
    },
    {
      serviceItemId: 8,
      serviceItemLabel: 'Retirement & Education Planning',
      isItemChecked: false,
      serviceItemIconClass: 'fa-book'
    },
    
    {
      serviceItemId: 9,
      serviceItemLabel: 'Mutual Fund',
      isItemChecked: false,
      serviceItemIconClass: 'fa-money-bill-trend-up'
    },
    {
      serviceItemId: 10,
      serviceItemLabel: 'Income Tax & GST',
      isItemChecked: false,
      serviceItemIconClass: 'fa-hand-holding-dollar'
    },
    {
      serviceItemId: 11,
      serviceItemLabel: 'PA, Travel & Liability',
      isItemChecked: false,
      serviceItemIconClass: 'fa-compass'
    },
    {
      serviceItemId: 12,
      serviceItemLabel: 'Direct Equity & Bond',
      isItemChecked: false,
      serviceItemIconClass: 'fa-file-contract'
    }
  ];
  insurenceList: InsurenceItem[] = [
    {
      serviceItemId: 1,
      serviceItemLabel: 'Health Insurance & Mediclaim',
      insurenceId: 1,
      insurenceName: 'This is a health insurence',
      insurenceDesc: 'Protects you from unexpected, high medical costs by using our health insurence policy',
      insurenceImgUrl: 'assets/images/mock_images/healthInc.jpg',
      insurencePrice: 1000,
    },
    {
      serviceItemId: 2,
      serviceItemLabel: 'Life Insurance',
      insurenceId: 2,
      insurenceName: 'This is a life insurence',
      insurenceDesc: 'If a child, a spouse, or a parent depends on you and your income, you need life insurance.',
      insurenceImgUrl: 'assets/images/mock_images/Life-Inc.png',
      insurencePrice: 1500,
    },
    {
      serviceItemId: 3,
      serviceItemLabel: 'Fire & Burglary Insurance',
      insurenceId: 3,
      insurenceName: 'This is Fire & Burglary Insurance',
      insurenceDesc: 'Offer an additional layer of security to your property.',
      insurenceImgUrl: 'assets/images/mock_images/fire-inc.jpg',
      insurencePrice: 2000,
    },
    {
      serviceItemId: 4,
      serviceItemLabel: 'Home, Shop & Office Insurance',
      insurenceId: 4,
      insurenceName: 'This is Home, Shop & Office Insurance',
      insurenceDesc: 'Protect your property from unexpected ricks such as fires, burglaries, natural disasters and other unfortunate incidents.',
      insurenceImgUrl: 'assets/images/mock_images/home-shop-inc.jpg',
      insurencePrice: 2500,
    },
    {
      serviceItemId: 5,
      serviceItemLabel: 'Bike, Motor Insurance',
      insurenceId: 5,
      insurenceName: 'This is a Bike, Motor Insurance',
      insurenceDesc: 'Ensure your bike or Motor safety with this Insurance policy.',
      insurenceImgUrl: 'assets/images/mock_images/bikeInc.png',
      insurencePrice: 3000,
    },
    {
      serviceItemId: 6,
      serviceItemLabel: 'Group Insurance',
      insurenceId: 6,
      insurenceName: 'This is a Group Insurance',
      insurenceDesc: 'Health insurance should be a given for every citizen',
      insurenceImgUrl: 'assets/images/mock_images/group-inc.png',
      insurencePrice: 3000,
    },
    {
      serviceItemId: 7,
      serviceItemLabel: 'Home Loan & LAP',
      insurenceId: 7,
      insurenceName: 'This is a Home Loan & LAP',
      insurenceDesc: 'You have the key to your new home.',
      insurenceImgUrl: 'assets/images/mock_images/home-lap.jpg',
      insurencePrice: 3000,
    },
    {
      serviceItemId: 8,
      serviceItemLabel: 'Retirement & Education Planning',
      insurenceId: 8,
      insurenceName: 'This is a Retirement & Education Planning',
      insurenceDesc: 'Took a small step to fulfil your dreams',
      insurenceImgUrl: 'assets/images/mock_images/retirement.jpg',
      insurencePrice: 3000,
    },
    {
      serviceItemId: 9,
      serviceItemLabel: 'Mutual Fund',
      insurenceId: 9,
      insurenceName: 'This is a Mutual Fund',
      insurenceDesc: 'Just one small positive thought can change your future.',
      insurenceImgUrl: 'assets/images/mock_images/mutual-fund.jpg',
      insurencePrice: 3000,
    },

    {
      serviceItemId: 10,
      serviceItemLabel: 'Income Tax & GST',
      insurenceId: 10,
      insurenceName: 'This is a Income Tax & GST',
      insurenceDesc: 'Keep calm and trust your tax advisor.',
      insurenceImgUrl: 'assets/images/mock_images/incomeTax.jpg',
      insurencePrice: 3000,
    },
    {
      serviceItemId: 11,
      serviceItemLabel: 'PA, Travel & Liability',
      insurenceId: 11,
      insurenceName: 'This is a PA, Travel & Liability',
      insurenceDesc: 'Make it a part of your journey and travel tension free.',
      insurenceImgUrl: 'assets/images/mock_images/travel-insurance.jpg',
      insurencePrice: 3000,
    },
    {
      serviceItemId: 12,
      serviceItemLabel: 'Direct Equity & Bond',
      insurenceId: 12,
      insurenceName: 'This is a Direct Equity & Bond',
      insurenceDesc: 'Stay calm & be focused on long term investments for wealth creation.',
      insurenceImgUrl: 'assets/images/mock_images/direct-Equity.jpg',
      insurencePrice: 3000,
    },
  ];
  constructor() {}

  public getServiceList() {
    return this.serviceItemList;
  }

  public getInsurenceList(serviceItemId: number) {
    let tempList = [];
    tempList = this.insurenceList.filter((data) => data.serviceItemId === serviceItemId);
    return tempList;
  }
}
