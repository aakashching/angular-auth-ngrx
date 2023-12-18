import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  loading:boolean=false

  constructor(private fb: FormBuilder,private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword:['',[Validators.required,Validators.minLength(6)]]
    });
   
  

  }

  // Add the onSubmit method as shown in the next step.
  onSubmit() {
    if (this.signupForm.valid) {
      // You can access the form values as follows:
      const email = this.signupForm.get('email').value;
      const password = this.signupForm.get('password').value;
      const firstName = this.signupForm.get('firstName').value;
      const lastName = this.signupForm.get('lastName').value
      const confirmPassword = this.signupForm.get('confirmPassword').value

      // Perform login logic here (e.g., send data to a server, validate credentials, etc.)
      // You can replace this with your actual login logic
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('email:', email);
      console.log('Password:', password);
      console.log('confirmPassword:',confirmPassword)
      this.loading=true
      this.auth.signup({name:firstName.trim()+' '+lastName.trim(),email,password}).subscribe(data=>{console.log(data);this.router.navigate(['/login']);this.loading=false})
    }
  }
}
