import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TrustedBrandComponent } from './components/trusted-brand/trusted-brand.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { PaymentGatewayComponent } from './components/payment-gateway/payment-gateway.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { CompanyLogoComponent } from './components/company-logo/company-logo.component';
import { SocialMediaContactComponent } from './components/social-media-contact/social-media-contact.component';
import { ApplicationFooterComponent } from './components/application-footer/application-footer.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent,
    ImageSliderComponent,
    AboutUsComponent,
    TrustedBrandComponent,
    OurServicesComponent,
    PaymentGatewayComponent,
    GalleryComponent,
    FeedbackComponent,
    EnquiryComponent,
    CompanyLogoComponent,
    SocialMediaContactComponent,
    ApplicationFooterComponent,
  ],
  imports: [
    CommonModule,
    NgImageSliderModule,
    SharedModule
  ],
  exports:[
    FooterComponent,
    MenuComponent,
    ImageSliderComponent,
    AboutUsComponent,
    TrustedBrandComponent,
    OurServicesComponent,
    PaymentGatewayComponent,
    GalleryComponent,
    FeedbackComponent,
    EnquiryComponent,
    CompanyLogoComponent,
    SocialMediaContactComponent,
    ApplicationFooterComponent,
    NgImageSliderModule
  ]
})
export class CoreModule { }
