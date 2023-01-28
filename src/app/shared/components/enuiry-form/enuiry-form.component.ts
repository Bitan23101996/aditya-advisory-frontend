import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnquiryFormModel } from 'src/app/core/models/enquiry-form.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-enuiry-form',
  templateUrl: './enuiry-form.component.html',
  styleUrls: ['./enuiry-form.component.scss']
})
export class EnuiryFormComponent implements OnInit {

  enquiryForm: FormGroup = new FormGroup({});
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.createEnuiryForm();
  }

  // Create Enquiry Form
  createEnuiryForm() {
    
    this.enquiryForm = this.fb.group({
      enquiryId: null,
      name: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ]),
      ],
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          Validators.minLength(5),
          Validators.maxLength(30),
        ]),
      ],
      mobile: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
      ],
      message: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(2000),
        ]),
      ],
    });
  }

  public sendEnquiry() {
    console.log("Form Value:", this.enquiryForm.value);
    
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
      this.apiService.sendEnquiryForm(payload).subscribe((res) => {
        this.submitted = false;
      }),
        (err: any) => {};
    }
  }
}
