import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {TooltipModule} from 'primeng/tooltip';
import {SidebarModule} from 'primeng/sidebar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TooltipModule,
    SidebarModule,
    HttpClientModule
  ],
  exports:[
    ReactiveFormsModule,
    TooltipModule,
    SidebarModule,
    HttpClientModule
  ]
})
export class SharedModule { }
