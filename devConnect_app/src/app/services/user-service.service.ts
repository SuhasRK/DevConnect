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
    this.http.post(environment.backendURL + '/saveUser',formValue).subscribe((res : any)=>{
      if (res.status === "success") {
        alert("New user added successfully");//TODO: add toast
        this.router.navigate(['/login']);
      }
      else{
        alert("Some issue in adding new user");//TODO: add toast
      }
    });
  }

  findUserByEmail(email : string,password : string) {
      this.http.get(environment.backendURL + '/users/getUser/' + email).subscribe((res : any)=>{
        if(res.length){
          if(res[0].password === password) {
            localStorage.setItem('token',res[0].userName);
            this.router.navigate(['/dashboard']);
          }
          else{
            alert("User exists but creds wrong!!!") //TODO: add toast
            console.log("User exists but creds wrong!!!");
          }
        
        }
        else{
          alert('User doesnt exist');  //TODO: add toast
          console.log("User doesnt exists");
          this.router.navigate(['/signup']);
        }
      })
    }

}
