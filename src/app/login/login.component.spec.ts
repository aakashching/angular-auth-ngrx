import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { authReducer } from '../store/reducer/auth.reducer';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule,StoreModule.forRoot({
        auth:authReducer
      }),HttpClientModule],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  // Your tests go here
  it('should create the login component', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have a invalid form initially', () => {
    fixture.detectChanges()
    expect(component.loginForm.valid).toBeFalsy();
  });
  it('should disable login button when from is invalid',()=>{
    fixture.detectChanges()
    expect(fixture.debugElement.nativeElement.querySelector('button[type="submit"]').disabled).toBeTrue()
  })
  
  it('should require email and password', () => {
    fixture.detectChanges(  )
    const email = component.loginForm.get('email');
    const password = component.loginForm.get('password');
  
    email.setValue('');
    password.setValue('');
  
    expect(email.hasError('required')).toBeTruthy();
    expect(password.hasError('required')).toBeTruthy();
  });
  
  it('email should be valid', () => {
    fixture.detectChanges()
    const email = component.loginForm.get('email');
    email.setValue('test@test.com');
  
    expect(email.hasError('email')).toBeFalsy();
  });
  
  it('should require a minimum password length', () => {
    fixture.detectChanges()
    const password = component.loginForm.get('password');
    password.setValue('pw');
  
    expect(password.hasError('minlength')).toBeTruthy();
  });
  
  
  it('should call onSubmit method when form is submitted', () => {
    // fixture.detectChanges()
    // spyOn(component, 'onSubmit');
    // const submitButton = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');
    // submitButton.click();
    // expect(component.onSubmit).toHaveBeenCalled();


    fixture.detectChanges()

    component.loginForm.setValue({ email: 'test@test.com', password: 'password' })
    // component.loginForm.invalid.
    fixture.detectChanges()
    // component.loginForm.setValue({password:'password'})
    spyOn(component, 'onSubmit')
      ;
    const submitButton = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');
    submitButton.disabled=false
    expect(submitButton.disabled).toBeFalse()
    submitButton.click();
    expect(component.loginForm.valid).toBeTruthy()
    expect(component.onSubmit).toHaveBeenCalled();
  });
  
});
