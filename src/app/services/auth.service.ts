import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { authSelector } from '../store/reducer/auth.reducer';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private store: Store) {

  }

  login(user: LoginUser) {

    return this.http.post("http://10.141.234.48:3000/api/auth/login", { user: user }, { responseType: 'text' })
  }
  signup(user: SignUpUser) {
    return this.http.post("http://10.141.234.48:3000/api/auth/signup", { user: user }, { responseType: 'text' })
  }
  fetchUser() {
    let token;
    //@ts-ignore
    this.store.select(authSelector).subscribe((d: any) => {
      token = d.authToken
    })
    return this.http.get("http://10.141.234.48:3000/api/auth", {
      headers: {
        authorization: token
      },
    })
  }
  // isAuthenticated(){
  //   let isAuth;
  //   this.store.select(authSelector).subscribe((d:any)=>{
  //     isAuth=d.authToken
  //   })
  //   return Boolean(isAuth)
  // }

}
interface SignUpUser extends LoginUser {
  name: string;
}
interface LoginUser {
  email: string;
  password: string
}
