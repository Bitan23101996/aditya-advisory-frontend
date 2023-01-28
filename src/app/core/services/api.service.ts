import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnquiryFormModel } from '../models/enquiry-form.model';
import { InsurenceItem } from '../models/insurence-item.model';
import { Menu } from '../models/menu.model';
import { PayableMobileNumber } from '../models/payable-mobile-no.model';
import { QRCode } from '../models/qr-code.model';
import { ServiceItem } from '../models/service-item.model';
import { SocialMediaIconModel } from '../models/social-media-icon.model';
import { TrustedBrandImg } from '../models/trusted-brand-img.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = environment.baseUrl;

  serviceItemList: ServiceItem[] = [
    {
      serviceItemId: 1,
      serviceItemLabel: 'Health Insurance & Mediclaim',
      isItemChecked: false,
      serviceItemIconClass: 'fa-notes-medical',
    },
    {
      serviceItemId: 2,
      serviceItemLabel: 'Life Insurance',
      isItemChecked: false,
      serviceItemIconClass: 'fa-heart-pulse',
    },

    {
      serviceItemId: 3,
      serviceItemLabel: 'Fire & Burglary Insurance',
      isItemChecked: false,
      serviceItemIconClass: 'fa-fire',
    },
    {
      serviceItemId: 4,
      serviceItemLabel: 'Home, Shop & Office Insurance',
      isItemChecked: false,
      serviceItemIconClass: 'fa-house-user',
    },
    {
      serviceItemId: 5,
      serviceItemLabel: 'Bike, Motor Insurance',
      isItemChecked: false,
      serviceItemIconClass: 'fa-motorcycle',
    },
    {
      serviceItemId: 6,
      serviceItemLabel: 'Group Insurance',
      isItemChecked: false,
      serviceItemIconClass: 'fa-group-arrows-rotate',
    },
    {
      serviceItemId: 7,
      serviceItemLabel: 'Home Loan & LAP',
      isItemChecked: false,
      serviceItemIconClass: 'fa-building',
    },
    {
      serviceItemId: 8,
      serviceItemLabel: 'Retirement & Education Planning',
      isItemChecked: false,
      serviceItemIconClass: 'fa-book',
    },

    {
      serviceItemId: 9,
      serviceItemLabel: 'Mutual Fund',
      isItemChecked: false,
      serviceItemIconClass: 'fa-money-bill-trend-up',
    },
    {
      serviceItemId: 10,
      serviceItemLabel: 'Income Tax & GST',
      isItemChecked: false,
      serviceItemIconClass: 'fa-hand-holding-dollar',
    },
    {
      serviceItemId: 11,
      serviceItemLabel: 'PA, Travel & Liability',
      isItemChecked: false,
      serviceItemIconClass: 'fa-compass',
    },
    {
      serviceItemId: 12,
      serviceItemLabel: 'Direct Equity & Bond',
      isItemChecked: false,
      serviceItemIconClass: 'fa-file-contract',
    },
  ];
  insurenceList: InsurenceItem[] = [
    {
      serviceItemId: 1,
      serviceItemLabel: 'Health Insurance & Mediclaim',
      insurenceId: 1,
      insurenceName: 'This is a health insurence',
      insurenceDesc:
        'Protects you from unexpected, high medical costs by using our health insurence policy',
      insurenceImgUrl: 'assets/images/mock_images/healthInc.jpg',
      insurencePrice: 1000,
    },
    {
      serviceItemId: 2,
      serviceItemLabel: 'Life Insurance',
      insurenceId: 2,
      insurenceName: 'This is a life insurence',
      insurenceDesc:
        'If a child, a spouse, or a parent depends on you and your income, you need life insurance.',
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
      insurenceDesc:
        'Protect your property from unexpected ricks such as fires, burglaries, natural disasters and other unfortunate incidents.',
      insurenceImgUrl: 'assets/images/mock_images/home-shop-inc.jpg',
      insurencePrice: 2500,
    },
    {
      serviceItemId: 5,
      serviceItemLabel: 'Bike, Motor Insurance',
      insurenceId: 5,
      insurenceName: 'This is a Bike, Motor Insurance',
      insurenceDesc:
        'Ensure your bike or Motor safety with this Insurance policy.',
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
      insurenceDesc:
        'Stay calm & be focused on long term investments for wealth creation.',
      insurenceImgUrl: 'assets/images/mock_images/direct-Equity.jpg',
      insurencePrice: 3000,
    },
  ];

  payableMobileNumberList: PayableMobileNumber[] = [
    {
      payableMobileNumberId: 1,
      payableMobileNumberlabel: 'PhonePay Number',
      payableMobileNumberValue: 12345678,
    },
    {
      payableMobileNumberId: 2,
      payableMobileNumberlabel: 'Gpay Number',
      payableMobileNumberValue: 12345678,
    },
    {
      payableMobileNumberId: 3,
      payableMobileNumberlabel: 'Paytm Number',
      payableMobileNumberValue: 12345678,
    },
    {
      payableMobileNumberId: 4,
      payableMobileNumberlabel: 'Amazon Pay',
      payableMobileNumberValue: 12345678,
    },
  ];

  QRCodeList: QRCode[] = [
    {
      qrCodeId: 1,
      qrCodelabel: 'PhonePay',
      qrCodeImgUrl: 'assets/images/qr-codes/qr.jpg',
    },
    {
      qrCodeId: 2,
      qrCodelabel: 'Gpay',
      qrCodeImgUrl: 'assets/images/qr-codes/qr.jpg',
    },
    {
      qrCodeId: 3,
      qrCodelabel: 'Paytm',
      qrCodeImgUrl: 'assets/images/qr-codes/qr.jpg',
    },
    {
      qrCodeId: 4,
      qrCodelabel: 'Amazon Pay',
      qrCodeImgUrl: 'assets/images/qr-codes/qr.jpg',
    },
  ];

  //Life Insurence Array
  lifeIncImageList: TrustedBrandImg[] = [
    {
      thumbImage: 'assets/images/trusted-brand/LifeInc/LifeInc_HDFC.png',
      trustedBrandImgId: 1,
    },
    {
      thumbImage:
        'assets/images/trusted-brand/LifeInc/LifeInc_ICICI_Prudential.png',
      trustedBrandImgId: 2,
    },
    {
      thumbImage: 'assets/images/trusted-brand/LifeInc/LifeInc_LIC.png',
      trustedBrandImgId: 3,
    },
    {
      thumbImage: 'assets/images/trusted-brand/LifeInc/LifeInc_MAX.png',
      trustedBrandImgId: 4,
    },
    {
      thumbImage: 'assets/images/trusted-brand/LifeInc/LifeInc_TATA_AIA.png',
      trustedBrandImgId: 5,
    },
  ];

  //Health Insurence Array
  healthIncImageList: TrustedBrandImg[] = [
    {
      thumbImage:
        'assets/images/trusted-brand/HealthInc/healthInc_aditya-birla-capital-limited.jpg',
      trustedBrandImgId: 1,
    },
    {
      thumbImage: 'assets/images/trusted-brand/HealthInc/healthInc_bajaj.png',
      trustedBrandImgId: 2,
    },
    {
      thumbImage:
        'assets/images/trusted-brand/HealthInc/healthInc_care_health.png',
      trustedBrandImgId: 3,
    },
    {
      thumbImage: 'assets/images/trusted-brand/HealthInc/healthInc_cholams.png',
      trustedBrandImgId: 4,
    },
    {
      thumbImage:
        'assets/images/trusted-brand/HealthInc/healthInc_hdfc-ergo.png',
      trustedBrandImgId: 5,
    },
    {
      thumbImage:
        'assets/images/trusted-brand/HealthInc/healthInc_icici_insurance.jpg',
      trustedBrandImgId: 6,
    },
    {
      thumbImage:
        'assets/images/trusted-brand/HealthInc/healthInc_kotak-general.jpg',
      trustedBrandImgId: 7,
    },
    {
      thumbImage: 'assets/images/trusted-brand/HealthInc/healthInc_liberty.jpg',
      trustedBrandImgId: 8,
    },
    {
      thumbImage:
        'assets/images/trusted-brand/HealthInc/healthInc_tata_aig.png',
      trustedBrandImgId: 9,
    },
    {
      thumbImage:
        'assets/images/trusted-brand/HealthInc/healthInc_Universal-Sompo.jpg',
      trustedBrandImgId: 10,
    },
    {
      thumbImage:
        'assets/images/trusted-brand/HealthInc/healthIncStar_Health.png',
      trustedBrandImgId: 11,
    },
    {
      thumbImage:
        'assets/images/trusted-brand/HealthInc/healthInc_national.png',
      trustedBrandImgId: 12,
    },
    {
      thumbImage: 'assets/images/trusted-brand/HealthInc/healthInc_navi.png',
      trustedBrandImgId: 13,
    },
    {
      thumbImage: 'assets/images/trusted-brand/HealthInc/healthInc_SBI.png',
      trustedBrandImgId: 14,
    },
    {
      thumbImage:
        'assets/images/trusted-brand/HealthInc/healthInc_shriram.jpeg',
      trustedBrandImgId: 15,
    },
    {
      thumbImage:
        'assets/images/trusted-brand/HealthInc/healthInc_magma_hdi.png',
      trustedBrandImgId: 16,
    },
    {
      thumbImage: 'assets/images/trusted-brand/HealthInc/healthInc_manipal.png',
      trustedBrandImgId: 17,
    },
  ];
  //Mutual Array
  mutualFundImageList: TrustedBrandImg[] = [
    {
      thumbImage: 'assets/images/trusted-brand/mFund/mFund_aditya_birla.png',
      trustedBrandImgId: 1,
    },
    {
      thumbImage: 'assets/images/trusted-brand/mFund/mFund_axis.png',
      trustedBrandImgId: 2,
    },
    {
      thumbImage:
        'assets/images/trusted-brand/mFund/mFund_Ben_Head_franklin.jpg',
      trustedBrandImgId: 3,
    },
    {
      thumbImage: 'assets/images/trusted-brand/mFund/mFund_birla.jpg',
      trustedBrandImgId: 4,
    },
    {
      thumbImage: 'assets/images/trusted-brand/mFund/mFund_dsp.png',
      trustedBrandImgId: 5,
    },
    {
      thumbImage: 'assets/images/trusted-brand/mFund/mFund_edleweiss.png',
      trustedBrandImgId: 6,
    },
    {
      thumbImage: 'assets/images/trusted-brand/mFund/mFund_hdfc.png',
      trustedBrandImgId: 7,
    },
    {
      thumbImage: 'assets/images/trusted-brand/mFund/mFund_icici.png',
      trustedBrandImgId: 8,
    },
    {
      thumbImage: 'assets/images/trusted-brand/mFund/mFund_kotak.png',
      trustedBrandImgId: 9,
    },
    {
      thumbImage: 'assets/images/trusted-brand/mFund/mFund_landt.png',
      trustedBrandImgId: 10,
    },
    {
      thumbImage: 'assets/images/trusted-brand/mFund/mFund_lic.png',
      trustedBrandImgId: 11,
    },
    {
      thumbImage: 'assets/images/trusted-brand/mFund/mFund_motilal.png',
      trustedBrandImgId: 12,
    },
    {
      thumbImage: 'assets/images/trusted-brand/mFund/mFund_mutualFund.jpg',
      trustedBrandImgId: 13,
    },
    {
      thumbImage: 'assets/images/trusted-brand/mFund/mFund_nippon.png',
      trustedBrandImgId: 14,
    },
    {
      thumbImage: 'assets/images/trusted-brand/mFund/mFund_pgim.png',
      trustedBrandImgId: 15,
    },
    {
      thumbImage: 'assets/images/trusted-brand/mFund/mFund_quant.jpg',
      trustedBrandImgId: 16,
    },
    {
      thumbImage: 'assets/images/trusted-brand/mFund/mFund_sbi.png',
      trustedBrandImgId: 17,
    },
    {
      thumbImage: 'assets/images/trusted-brand/mFund/mFund_tata.jpg',
      trustedBrandImgId: 18,
    },
    {
      thumbImage: 'assets/images/trusted-brand/mFund/mFund_uti.jpg',
      trustedBrandImgId: 19,
    },
  ];

  //Menu List Array
  menuList: Menu[] = [
    {
      menuId: 1,
      menuName: 'Home',
      menuDesc: 'Home',
      showMenu: true,
      redirectTo: 'home'
    },
    {
      menuId: 2,
      menuName: 'About Us',
      menuDesc: 'About',
      showMenu: true,
      redirectTo: 'about-us-section'
    },
    {
      menuId: 3,
      menuName: 'Services',
      menuDesc: 'Services',
      showMenu: true,
      redirectTo: 'services-section'
    },
    {
      menuId: 4,
      menuName: 'Trusted Brands',
      menuDesc: 'Trusted Brand',
      showMenu: true,
      redirectTo: 'trusted-brand-section'
    },
    {
      menuId: 5,
      menuName: 'Payment',
      menuDesc: 'Payment',
      showMenu: false,
      redirectTo: ''
    },
    {
      menuId: 6,
      menuName: 'Gallery',
      menuDesc: 'Gallery',
      showMenu: false,
      redirectTo: ''
    },
    {
      menuId: 7,
      menuName: 'Feedback',
      menuDesc: 'Feedback',
      showMenu: false,
      redirectTo: ''
    },
    {
      menuId: 8,
      menuName: 'Contact Us',
      menuDesc: 'Contact Us',
      showMenu: true,
      redirectTo: 'enquiry-form-section'
    },
  ];

  socialMediaIconList: SocialMediaIconModel[] = [
    {
      iconId: 1,
      iconUrl: 'fa-brands fa-whatsapp',
      iconDesc: 'Whatsapp',
    },
    {
      iconId: 2,
      iconUrl: 'fa-brands fa-facebook',
      iconDesc: 'Facebook',
    },
    {
      iconId: 3,
      iconUrl: 'fa-solid fa-envelope',
      iconDesc: 'Mail',
    },
    {
      iconId: 4,
      iconUrl: 'fa-brands fa-twitter',
      iconDesc: 'Twitter',
    },
    {
      iconId: 5,
      iconUrl: 'fa-brands fa-instagram',
      iconDesc: 'Instagram',
    },
    {
      iconId: 6,
      iconUrl: 'fa-brands fa-youtube',
      iconDesc: 'Youtube',
    },
    {
      iconId: 7,
      iconUrl: 'fa-brands fa-pinterest',
      iconDesc: 'Pinterest',
    },
    {
      iconId: 8,
      iconUrl: 'fa-brands fa-linkedin',
      iconDesc: 'Linkedin',
    },
  ];
  constructor(private http: HttpClient) {}

  //Services: Get all services list
  public getServiceList() {
    return this.serviceItemList;
  }

  public getInsurenceList(serviceItemId: number) {
    let tempList = [];
    tempList = this.insurenceList.filter(
      (data) => data.serviceItemId === serviceItemId
    );
    return tempList;
  }

  //Payment Gateway:
  public getPayableMobileNumberList() {
    return this.payableMobileNumberList;
  }

  //Paymnet - Get All QR List
  public getQRCodeList() {
    return this.QRCodeList;
  }

  //Services - Get all insurence list
  public getAlliInsurenceItemList() {
    return this.insurenceList;
  }

  //Trusted Brand - Get all slider image for life insurence
  public getLifeIncImageList() {
    return this.lifeIncImageList;
  }

  //Trusted Brand - Get all slider image for health insurence
  public getHealthIncImageList() {
    return this.healthIncImageList;
  }

  //Trusted Brand - Get all slider image for mutual fund
  public getMutualFundImageList() {
    return this.mutualFundImageList;
  }
  //Get Menu List
  public getMenuList() {
    return this.menuList;
  }

  //Get Social Media Icon List
  public getSocialMediaIconList() {
    return this.socialMediaIconList;
  }

  //Send enquiry form data
  public sendEnquiryForm(query: EnquiryFormModel): Observable<any> {
    return this.http.post<EnquiryFormModel>(
      `${this.baseUrl}/saveEnuiryData`,
      query
    );
  }
}
