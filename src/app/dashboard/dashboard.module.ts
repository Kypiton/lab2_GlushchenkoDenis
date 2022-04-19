import { NgModule } from '@angular/core';

import { OrdersComponent } from './orders/orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    OrdersComponent,
    AddOrderComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [ SharedModule ],
  providers: []
})
export class DashboardModule { }
