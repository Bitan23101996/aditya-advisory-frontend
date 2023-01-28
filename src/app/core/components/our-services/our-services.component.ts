import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { InsurenceItem } from '../../models/insurence-item.model';
import { ServiceItem } from '../../models/service-item.model';
import { ApiService } from '../../services/api.service';
import { BroadcastService } from '../../services/broadcast.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
})
export class OurServicesComponent implements OnInit {
  serviceItemList: ServiceItem[] = [];
  insurenceItemList: InsurenceItem[] = [];
  displayEnuiryDialog:boolean = false;
  selectedInsurenceItem:any = null;
  constructor(private apiService: ApiService, private broadcastService: BroadcastService) {}

  ngOnInit(): void {
    // this.getServiceItemList();
    this.getAllInsurenceList();
  }

  public getServiceItemList(): ServiceItem[] {
    this.serviceItemList = this.apiService.getServiceList();
    return this.serviceItemList;
  }

  //Function: When Service Checkbox is checked/Unchecked
  public selectService(event: any,serviceItem: ServiceItem,index: number): void {
    if (event.target.checked) {
      if (this.serviceItemList.length > 0) {
        for (let i = 0; i < this.serviceItemList.length; i++) {
          if (this.serviceItemList[i].serviceItemId == serviceItem.serviceItemId) {
            this.serviceItemList[i].isItemChecked = true;
          }
        }
      }
      this.getInsurenceListByServiceDetails(serviceItem);
    } else {
      this.toggleCheckedStatus(serviceItem.serviceItemId);
      this.removeInsurenceFromList(serviceItem.serviceItemId);
    }
  }

  //Function: When Checkbox is check, Fetch list of Insurence
  public getInsurenceListByServiceDetails(serviceItem: ServiceItem) {
    if (serviceItem.serviceItemId) {
      let tempInsurenceList = this.apiService.getInsurenceList(serviceItem.serviceItemId);
      if (tempInsurenceList.length > 0) {
        this.insurenceItemList = this.insurenceItemList.concat(tempInsurenceList);
      }
      console.log('Insurence List: ', this.insurenceItemList);
    } else {
      this.insurenceItemList = [];
    }
  }

  public removeInsurenceFromList(removeItemId:number){
    let tempArr = [...this.insurenceItemList]
    this.insurenceItemList = tempArr.filter(data => data.serviceItemId !== removeItemId);
    console.log("Remove Insurence List:",this.insurenceItemList);
  }

  //Function: Check/Uncheck toggle and true/false add - [Generic Method]
  public toggleCheckedStatus(removeItemId: number) {
    if (this.serviceItemList.length > 0) {
      for (let i = 0; i < this.serviceItemList.length; i++) {
        if (this.serviceItemList[i].serviceItemId === removeItemId) {
          this.serviceItemList[i].isItemChecked = false;
        }
      }
    }
  }

  public getAllInsurenceList():InsurenceItem[]{
    this.insurenceItemList = this.apiService.getAlliInsurenceItemList();
    return this.insurenceItemList;
  }

  //Function: When Click on Enquiry Button 
  public openEnuiryDialog(data:InsurenceItem){
    this.selectedInsurenceItem = data.serviceItemId;
    this.displayEnuiryDialog = true;
    this.broadcastService.fixedMenuBtnVisibility.next(false);
    
  }

  //Function: When Click on Close Button to close dailog
  public closeEnuiryDialog(){
    this.displayEnuiryDialog = false;
    this.broadcastService.fixedMenuBtnVisibility.next(true);
  }
}
