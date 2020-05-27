import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Feature1Component } from './feature1/feature1.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      { path: 'feature_1', component: Feature1Component}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
