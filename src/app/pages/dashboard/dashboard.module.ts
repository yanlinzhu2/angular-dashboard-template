import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedAntDesignModule } from '../../shared/ant-design.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedAntDesignModule,
    FormsModule
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
