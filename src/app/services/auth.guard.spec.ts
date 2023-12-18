import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { Store, StoreModule } from '@ngrx/store';
import { authReducer } from '../store/reducer/auth.reducer';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
     
      imports:[
        StoreModule.forRoot({
          auth:authReducer
        }),
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
