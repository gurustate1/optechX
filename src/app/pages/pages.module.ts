import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileManagementComponent } from './profile-management/profile-management.component';
import { OemManagementComponent } from './oem-management/oem-management.component';
import { ApplicationViewComponent } from './application-view/application-view.component';
import { CreateImageComponent } from './create-image/create-image.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { ReportsComponent } from './reports/reports.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileManagementComponent,
    OemManagementComponent,
    ApplicationViewComponent,
    CreateImageComponent,
    OrderManagementComponent,
    ReportsComponent,
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
