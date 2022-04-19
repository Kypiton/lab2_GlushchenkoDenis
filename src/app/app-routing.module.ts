import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { ProfileComponent } from './homepage/profile/profile.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { AddOrderComponent } from './dashboard/add-order/add-order.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  { path: '', 
    component:LoginComponent//OrdersComponent  
  },
  {
    path: 'add-order',//dashboard
    canActivate: [AuthGuard],
    component: AddOrderComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: OrdersComponent
      },
      {
        path: 'add-order',
        component: AddOrderComponent
      }
    ]
  },
  {
    path: '**',
    component: LoginComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
