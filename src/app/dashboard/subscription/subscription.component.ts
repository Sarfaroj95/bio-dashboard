import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent implements OnInit {

  mockData:any = {
    "accessCode" : [
      { name: "Generated", count: 10, color: "#0DCAF0", icon: "fa fa-cogs"},
      { name: "Used", count: 6, color: "#a31aff", icon: "fa fa-users"},
      { name: "Inactive", count: 6, color: "#ff3300", icon: "fa fa-user-times"},
      { name: "Archive", count: 13, color: "#1ABC9C", icon: "fa fa-archive"},
    ],
    "participants" : [
      { name: "Enrolled", count: 5, color: "#0000ff", icon: "fa fa-cube"},
      { name: "Active", count: 9, color: "#009900", icon: "fa fa-check-square-o"},
      { name: "Inactive", count: 6, color: "#ff3300", icon: "fa fa-user-times"},
      { name: "Archive", count: 7, color: "#1ABC9C", icon: "fa fa-archive"},
    ],
    "account": {
      "acountNo": "78ynuiy8",
      "status": "active",
      'accountName': 'Manipal Hospital Now',
      "activeDate": '28 Sep 2024 10:00 am',
      "expDate": '27 Oct  2024 10:00 am',
      'registerMail': "abcd@manipal.com",
    }
  }
  progress = 0;
  radius = 70;
  circumference = 2 * Math.PI * this.radius;
  dashOffset = this.circumference;
  accountDetails:any;
  ngOnInit(): void {
    this.calculateDaysLeft();
    this.accountDetails = this.mockData.account;
  }

  dynamicBorderStyles(color:string){
    return {
      'border': `1px solid ${color}`,
      'border-left': `4px solid ${color}`
    }
  }
  textColor(color:string){
    return {
      'color': color
    }
  }

  calculateDaysLeft(): void {
    let activeDate = new Date();
    let expDate = new Date(this.mockData.account.expDate);
    const timeDiff = expDate.getTime() - activeDate.getTime();
    const dayleft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    this.updateProgress(dayleft);
  }

  updateProgress(percentage: number) {
    this.progress = percentage;
    const offset = this.circumference - (percentage / 30) * this.circumference;
    this.dashOffset = offset;
  }

}
