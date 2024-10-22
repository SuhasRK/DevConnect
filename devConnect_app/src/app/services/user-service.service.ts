import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  addUser(formValue : any) {
    return this.http.post(environment.backendURL + '/auth/register',formValue);
  }

  findUserByEmail(formValue : any) {
      return this.http.post(environment.backendURL + '/auth/login',formValue);
  }

  findUserById (id : any) {
    let userInfo : any;
    this.http.get(environment.backendURL + 'users/getUser' + id).subscribe((res)=>{
      userInfo =  res
    });

    return userInfo;
  }

}
