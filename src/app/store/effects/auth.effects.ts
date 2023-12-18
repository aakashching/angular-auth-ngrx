import { Injectable } from '@angular/core';
import { Actions, act, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators'
import { AuthService } from 'src/app/services/auth.service';
import * as authAction from '../actions/auth.action'
import { Router } from '@angular/router';


@Injectable()
export class AuthEffect{
    loginEffect$= createEffect(()=>this.actions.pipe(
        ofType(authAction.login),
        switchMap((action)=>this.auth.login({email:action.email,password:action.password}).pipe(
            map(token=>{ this.router.navigate(["/"]);return authAction.loggedIn({authToken:token})}),
            catchError((error)=> EMPTY)
        ))
    ))

    fetchUserEffect$=createEffect(()=>this.actions.pipe(
        ofType(authAction.fetchUser),
        switchMap(()=>this.auth.fetchUser().pipe(
            map((user:any)=> authAction.fetchedUser({user:user})),
            catchError((error)=>EMPTY)
        ))
    ))
        

    constructor(private actions:Actions,private auth:AuthService,private router:Router){

    }
}