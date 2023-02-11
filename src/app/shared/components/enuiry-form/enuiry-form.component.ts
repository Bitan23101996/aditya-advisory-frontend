import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnquiryFormModel } from 'src/app/core/models/enquiry-form.model';
import { SentEmailModel } from 'src/app/core/models/sent-email.model';
import { ApiService } from 'src/app/core/services/api.service';
import { EmailService } from 'src/app/core/services/email.service';
import { MessageService } from 'primeng/api';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ServiceItem } from 'src/app/core/models/service-item.model';
import { BroadcastService } from 'src/app/core/services/broadcast.service';

@Component({
  selector: 'app-enuiry-form',
  templateUrl: './enuiry-form.component.html',
  styleUrls: ['./enuiry-form.component.scss'],
})
export class EnuiryFormComponent implements OnInit {
  enquiryForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  serviceItemList: ServiceItem[] = [];
  sendingEnquiryMail:boolean = false;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private emailService: EmailService,
    private messageService: MessageService,
    private ngxLoader: NgxUiLoaderService,
    private broadcastService: BroadcastService
  ) {}

  ngOnInit(): void {
    this.createEnuiryForm();
    //  this.getServiceItemList();
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
      // this.getInsurenceListByServiceDetails(serviceItem);
    } else {
      // this.toggleCheckedStatus(serviceItem.serviceItemId);
      // this.removeInsurenceFromList(serviceItem.serviceItemId);
    }
  }

  // Create Enquiry Form
  createEnuiryForm() {
    this.enquiryForm = this.fb.group({
      enquiryId: null,
      name: [
        null,
        // "Bitan Das",
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]),
      ],
      email: [
        null,
        // 'bitan@das.com',
        Validators.compose([
          Validators.required,
          // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          Validators.minLength(5),
          Validators.maxLength(30),
        ]),
      ],
      mobile: [
        null,
        // 8961743866,
        Validators.compose([
          Validators.required,
          Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
      ],
      // serviceList: this.serviceItemList,
      message: [
        null,
        // 'loremlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  ipsum ',
        Validators.compose([
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(2000),
        ]),
      ],
    });
  }

  //Function: When Send Message is clicked
  public sendEnquiry() {

    this.submitted = true;
    if (this.enquiryForm.invalid) {
      return;
    }

    let payload: EnquiryFormModel = {
      enquiryId: '',
      name:
        this.enquiryForm.get('name')?.value == null ||
        this.enquiryForm.get('name')?.value == ''
          ? ''
          : this.enquiryForm.get('name')?.value,
      email:
        this.enquiryForm.get('email')?.value == null ||
        this.enquiryForm.get('email')?.value == ''
          ? ''
          : this.enquiryForm.get('email')?.value,
      mobile:
        this.enquiryForm.get('mobile')?.value == null ||
        this.enquiryForm.get('mobile')?.value == ''
          ? ''
          : this.enquiryForm.get('mobile')?.value,
      message:
        this.enquiryForm.get('message')?.value == null ||
        this.enquiryForm.get('message')?.value == ''
          ? ''
          : this.enquiryForm.get('message')?.value,
    };

    if (payload) {
      this.submitted = false;
      this.sentEmail(payload);
      this.createEnuiryForm();
      /*  this.apiService.sendEnquiryForm(payload).subscribe((res) => {
        this.submitted = false;
        this.sentEmail(payload);
      }),
        (err: any) => {}; */
    }
  }

  //SENT EMAIL API FUNCTION
  public sentEmail(data: any) {
    if (data) {
      let payload = {
        email: data.email,
        name: data.name,
        mobile: data.mobile,
        message: data.message,
      };
      this.ngxLoader.startLoader('sent-enquiry-loader');

      this.emailService.sendEmail(payload).subscribe((res: any) => {
        console.log('Response From Email Service:::', res);
        if (res) {
          this.ngxLoader.stopLoader('sent-enquiry-loader');
          if (!res.isError) {
            this.messageService.add({
              severity: 'success',
              summary: `${res.message}`,
            });
          // this.broadcastService.enquiryMailSent.next(true);
          } else {
            this.messageService.add({
              severity: 'error',
              summary: `${res.message}`,
            });
            // this.broadcastService.enquiryMailSent.next(false);
          }
        }
      },
      (error)=>{
        if(error.error){
          this.ngxLoader.stopLoader('sent-enquiry-loader');
          this.messageService.add({
            severity: 'error',
            summary: `Something went wrong. Please contact system admin`,
          });

        }
      }
      
      );
    }
  }

  public numbersOnlyValidator(event: any) {
    const pattern = /^[0-9\-]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9\-]/g, "");
    }
  }
}
