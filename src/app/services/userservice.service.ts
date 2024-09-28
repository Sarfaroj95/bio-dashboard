import { HttpClient } from '@angular/common/http';
import { Injectable,  } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  base_url = "http://localhost:3000/"
  constructor(private http: HttpClient, private router: Router) { }

  getUserData(): Observable<any>{
    return this.http.get<any>(this.base_url + 'dataList')
  }

  userAuth(){
    const token = localStorage.getItem("token");
    if(token){
      this.router.navigate(['main']);
    } else {
      this.router.navigate(['login']);
    }
  }

 logOff(){
  localStorage.removeItem('token');
  this.router.navigate(['login']);
 }
}
