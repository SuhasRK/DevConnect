import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private http: HttpClient, private router: Router) {
    // This service can now make HTTP requests via `this.http`.
  }

  signupForm = new FormGroup({
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required,Validators.email]),
    userName : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    confirmPassword : new FormControl('',Validators.required)
  })

  onSubmit(){
    this.http.post(environment.backendURL + '/saveUser',this.signupForm.value).subscribe((res : any)=>{
      if (res.status === "success") {
        this.router.navigate(['/login']);
      }
    });
    // console.log(this.signupForm.value);
  }
}
