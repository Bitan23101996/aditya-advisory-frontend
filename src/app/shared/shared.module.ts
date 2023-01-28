import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {TooltipModule} from 'primeng/tooltip';
import {SidebarModule} from 'primeng/sidebar';
import { HttpClientModule } from '@angular/common/http';
import { EnuiryFormComponent } from './components/enuiry-form/enuiry-form.component';
import { NumberDirective } from './directives/numbers-only.directive';

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
    
  ],
  exports:[
    ReactiveFormsModule,
    TooltipModule,
    SidebarModule,
    HttpClientModule,
    EnuiryFormComponent,
    NumberDirective
  ]
})
export class SharedModule { }
