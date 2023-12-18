import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { authReducer } from '../store/reducer/auth.reducer';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          auth:authReducer
        }),
        HttpClientModule
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoud have login method',()=>{
    expect(service.login).toBeTruthy()
  })
  it('shoud have signup method',()=>{
    expect(service.signup).toBeTruthy()
  })
  it('shoud have fetchUser method',()=>{
    expect(service.signup).toBeTruthy()
  })
});
