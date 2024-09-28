import { Routes } from '@angular/router';
import { HomePageComponent } from './dashboard/home-page/home-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { SopsPageComponent } from './dashboard/sops-page/sops-page.component';
import { ActivityComponent } from './dashboard/activity/activity.component';
import { SubscriptionComponent } from './dashboard/subscription/subscription.component';
import { AccessCodeComponent } from './dashboard/access-code/access-code.component';
import { InvoiceComponent } from './dashboard/invoice/invoice.component';
import { FeedbackComponent } from './dashboard/feedback/feedback.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {path: "", redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {
    path: 'main', component: DashboardComponent,
    children:[
      {path: "", redirectTo:'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: HomePageComponent},
      {path: 'sops', component: SopsPageComponent},
      {path: 'activity', component: ActivityComponent},
      {path: 'subscription', component: SubscriptionComponent},
      {path: 'accesscode', component: AccessCodeComponent},
      {path: 'invoice', component: InvoiceComponent},
      {path: 'feedback', component: FeedbackComponent},
  ],

  }
];
