import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { LaSidebarHeaderComponent } from './la-sidebar-header/la-sidebar-header.component';



@NgModule({
  declarations: [LaSidebarHeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    LaSidebarHeaderComponent

  ]
})
export class SharedModule { }
