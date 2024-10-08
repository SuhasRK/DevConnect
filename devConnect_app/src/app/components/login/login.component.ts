import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private http: HttpClient, private router: Router) {
    // This service can now make HTTP requests via `this.http`.
  }

  loginForm = new FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })

  onSubmit() {
    this.http.get(environment.backendURL + '/getUser/' + this.loginForm.value.email).subscribe((res : any)=>{
      if(res.length){
        if(res[0].password === this.loginForm.value.password) {
          this.router.navigate(['/dashboard']);
        }
        else{
          console.log("User exists but creds wrong!!!");
        }
        
      }
      else{
        console.log("User doesnt exists");
        this.router.navigate(['/signup']);
      }
    })
  }
}
