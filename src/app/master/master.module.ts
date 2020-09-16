import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared-components/shared.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class MasterModule { }
