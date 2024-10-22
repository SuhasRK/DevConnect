import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private userService : UserServiceService) {
    // This service can now make HTTP requests via `this.http`.
  }

  loginForm = new FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })

  onSubmit() {
    this.userService.findUserByEmail(this.loginForm.value).subscribe((res : any)=>{
      console.log(res.data);
      sessionStorage.setItem('token',res.token.toString());
      sessionStorage.setItem('id',res.data);
    })
  }
}
