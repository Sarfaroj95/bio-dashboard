import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private service: UserserviceService){}
  ngOnInit(): void {
    this.service.userAuth();
  }
  navList:any = [
      {routeName: "Dashboard", icon: 'fa fa-table', route: '/main/dashboard'},
      {routeName: "SOPs", icon: 'fa fa-snowflake-o', route: '/main/sops'},
      {routeName: "Activity", icon: 'fa fa-check-square-o', route: '/main/activity'},
      {routeName: "Subscription", icon: 'fa fa-diamond', route: '/main/subscription'},
      {routeName: "Access Code", icon: 'fa fa-credit-card', route: '/main/accesscode'},
      {routeName: "Invoice", icon: 'fa fa-user-circle-o', route: '/main/invoice'},
      {routeName: "Feedback", icon: 'fa fa-comments-o', route: '/main/feedback'},
     ]

    logOff(){
      this.service.logOff();
    }
}
