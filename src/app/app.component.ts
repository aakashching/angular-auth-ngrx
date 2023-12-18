import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { autoLogin, fetchUser } from './store/actions/auth.action';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'auth-app';
  constructor(private store:Store,private auth:AuthService){

  }
  ngOnInit(): void {
      this.store.dispatch(autoLogin())
      this.store.dispatch(fetchUser())
      this.auth.fetchUser().subscribe((res)=>console.log(res))
  }
}
