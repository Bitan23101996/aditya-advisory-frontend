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
      serviceItemLabel: 'Car',
      isItemChecked: false,
      serviceItemIconClass: 'fa-car'
    },
    {
      serviceItemId: 2,
      serviceItemLabel: 'Bike',
      isItemChecked: false,
      serviceItemIconClass: 'fa-motorcycle'
    },
    
    {
      serviceItemId: 3,
      serviceItemLabel: 'Health',
      isItemChecked: false,
      serviceItemIconClass: 'fa-notes-medical'
    },
    {
      serviceItemId: 4,
      serviceItemLabel: 'Life',
      isItemChecked: false,
      serviceItemIconClass: 'fa-heart-pulse'
    },
    {
      serviceItemId: 5,
      serviceItemLabel: 'Mutual Funds',
      isItemChecked: false,
      serviceItemIconClass: ' fa-money-bill-trend-up'
    },
  ];
  insurenceList: InsurenceItem[] = [
    {
      serviceItemId: 1,
      serviceItemLabel: 'Car Insurence',
      insurenceId: 1,
      insurenceName: 'This is a car insurence',
      insurenceDesc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iure? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iure?',
      insurenceImgUrl: 'assets/images/mock_images/car_inc.jpg',
      insurencePrice: 1000,
    },
    {
      serviceItemId: 2,
      serviceItemLabel: 'Bike Insurence',
      insurenceId: 2,
      insurenceName: 'This is a bike insurence',
      insurenceDesc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iure? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iure?',
      insurenceImgUrl: 'assets/images/mock_images/bikeInc.png',
      insurencePrice: 1500,
    },
    {
      serviceItemId: 3,
      serviceItemLabel: 'Health Insurence',
      insurenceId: 3,
      insurenceName: 'This is a health insurence',
      insurenceDesc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iure? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iure?',
      insurenceImgUrl: 'assets/images/mock_images/healthInc.jpg',
      insurencePrice: 2000,
    },
    {
      serviceItemId: 4,
      serviceItemLabel: 'Life Insurence',
      insurenceId: 4,
      insurenceName: 'This is a Life insurence',
      insurenceDesc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iure? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iure?',
      insurenceImgUrl: 'assets/images/mock_images/Life-Inc.png',
      insurencePrice: 2500,
    },
    {
      serviceItemId: 5,
      serviceItemLabel: 'Mutual Funds',
      insurenceId: 5,
      insurenceName: 'This is a mutual fund',
      insurenceDesc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iure? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iure? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iure? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iure?',
      insurenceImgUrl: 'assets/images/mock_images/mutualFund.jpg',
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
