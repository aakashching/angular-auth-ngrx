import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store,select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchUser } from '../store/actions/auth.action';
import { authSelector } from '../store/reducer/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store:Store,private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isAuthenticated

      //@ts-ignore
      this.store.pipe(select(authSelector)).subscribe((auth:any)=>{
        isAuthenticated=Boolean(auth.authToken)
      })
      if (!isAuthenticated) {
        this.router.navigate(['/login']);
    }
    // this.store.dispatch(fetchUser())
    return isAuthenticated;
  }
  
}
