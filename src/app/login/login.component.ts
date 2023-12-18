import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import * as AuthActions from '../store/actions/auth.action'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading:boolean=false

  constructor(private fb: FormBuilder,private auth: AuthService,private store:Store) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
   
  

  }

  // Add the onSubmit method as shown in the next step.
  onSubmit() {
    if (this.loginForm.valid) {
      // You can access the form values as follows:
      const email = this.loginForm.get('email').value;
      const password = this.loginForm.get('password').value;

      // Perform login logic here (e.g., send data to a server, validate credentials, etc.)
      // You can replace this with your actual login logic
      console.log('email:', email);
      console.log('Password:', password);
      this.loading=true
      // this.auth.login({email,password}).subscribe(data=>{console.log(data);this.loading=false})

      //dipatching login event
      this.store.dispatch(AuthActions.login({email,password}))
      this.loading=false
    }
  }
}

