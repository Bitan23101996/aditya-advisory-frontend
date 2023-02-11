import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {TooltipModule} from 'primeng/tooltip';
import {SidebarModule} from 'primeng/sidebar';
import { HttpClientModule } from '@angular/common/http';
import { EnuiryFormComponent } from './components/enuiry-form/enuiry-form.component';
import { NumberDirective } from './directives/numbers-only.directive';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { NgxUiLoaderConfig, NgxUiLoaderModule, PB_DIRECTION, POSITION, SPINNER, NgxUiLoaderHttpModule  } from 'ngx-ui-loader';
import { AppConstant } from '../core/app-constant';
import { BroadcastService } from '../core/services/broadcast.service';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: AppConstant.CUSTOM_LOADER.LOADER_COLOR,
  bgsOpacity: 1,
  bgsPosition: "center-center",
  bgsSize: 90,
  blur: 4,
  delay: 0,
  fgsSize: 60,
  fgsPosition: "center-center",
  fgsColor: AppConstant.CUSTOM_LOADER.LOADER_COLOR, // spinner color 
  pbColor: AppConstant.CUSTOM_LOADER.PROGRESS_BAR_COLOR, // progress bar color
  bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.foldingCube, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: AppConstant.CUSTOM_LOADER.PROGRESS_BAR_THICKNESS, // progress bar thickness

  text: 'WAITING.....',
  textColor: "#FFFFFF",
  textPosition: "center-center",
};


@NgModule({
  declarations: [
    EnuiryFormComponent,
    NumberDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TooltipModule,
    SidebarModule,
    HttpClientModule,
    ToastModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    // NgxUiLoaderHttpModule.forRoot({showForeground: true})  
    NgxUiLoaderHttpModule.forRoot({showForeground: true})  
  ],
  exports:[
    ReactiveFormsModule,
    TooltipModule,
    SidebarModule,
    HttpClientModule,
    EnuiryFormComponent,
    NumberDirective,
    ToastModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule
  ],
  providers: [MessageService]
})
export class SharedModule {
  
 }
