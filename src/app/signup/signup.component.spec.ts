import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms'
import { SignupComponent } from './signup.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from '../store/reducer/auth.reducer';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports:[ReactiveFormsModule,StoreModule.forRoot({
        auth:authReducer
      }),HttpClientModule,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a invalid form initially',()=>{
    fixture.detectChanges()

    expect(component.signupForm.valid).toBeFalsy()
  })
  it('should have value of name',()=>{
    fixture.detectChanges()
    const firstName = component.signupForm.get('firstName')
    const lastName = component.signupForm.get('lastName')
    firstName.setValue('test')
    lastName.setValue('1')
    expect(firstName.hasError('invalid')).toBeFalsy()
    expect(lastName.hasError('invalid')).toBeFalsy()
  })

  it('should click submit button and call onSubmit function',()=>{
    fixture.detectChanges()
    spyOn(component,'onSubmit')
    let submitButton=fixture.debugElement.nativeElement.querySelector('button[type="submit"]')
    submitButton.click()
    expect(component.onSubmit).toHaveBeenCalled()
  })
});
