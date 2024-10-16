import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private http: HttpClient, private router: Router,private userService : UserServiceService) {
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
    this.userService.addUser(this.signupForm.value);
  }
}
