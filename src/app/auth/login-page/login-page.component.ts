import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../../services/userservice.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private service: UserserviceService, private route: Router) { }

  ngOnInit(): void {
    this.service.userAuth();
  }

  Login(){
    const userName = this.loginForm.value.email
    const password = this.loginForm.value.password

    if(userName == "sarfaroj95@gmail.com" && password == "1234"){
      localStorage.setItem('token', 'true');
      this.loginForm.reset();
      this.route.navigate(['main']);
    } else {
      alert("Invalid credentials");
      this.loginForm.reset();
    }
  }

}
