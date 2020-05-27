import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedAntDesignModule } from '../../shared/ant-design.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { Feature1Component } from './feature1/feature1.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedAntDesignModule,
    FormsModule
  ],
  declarations: [
    DashboardComponent,
    Feature1Component,
  ],
})
export class DashboardModule { }
