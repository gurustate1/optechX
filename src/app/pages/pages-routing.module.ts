import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationViewComponent } from './application-view/application-view.component';
import { CreateImageComponent } from './create-image/create-image.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OemManagementComponent } from './oem-management/oem-management.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { ProfileManagementComponent } from './profile-management/profile-management.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile-management', component: ProfileManagementComponent },
  { path: 'oem-management', component: OemManagementComponent },
  { path: 'application-view', component: ApplicationViewComponent },
  { path: 'create-image', component: CreateImageComponent },
  { path: 'order-management', component: OrderManagementComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'invoice', component: InvoiceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
