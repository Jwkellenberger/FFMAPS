import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import {PurchaseComponent} from './purchase/purchase.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'portal',
    component: EmployeePortalComponent
  }, {
    path: 'portal/layout',
    component: OwnerDashboardComponent
  },
  {
    path: 'home/purchase',
    component: PurchaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
