import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {TooltipModule} from 'primeng/tooltip';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TooltipModule,
    SidebarModule
  ],
  exports:[
    ReactiveFormsModule,
    TooltipModule,
    SidebarModule
  ]
})
export class SharedModule { }
