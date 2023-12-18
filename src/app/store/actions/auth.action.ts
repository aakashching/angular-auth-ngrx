import { createAction, props } from "@ngrx/store";


export const login =createAction('[LoginComponent] login',props<{email:string;password:string}>())

export const loggedIn = createAction('[LoginComponent] login success',props<{authToken:string;}>())
export const autoLogin = createAction('[Login State reocver] auto login')
export const fetchUser = createAction('[Login Action fetching user details]')
export const fetchedUser = createAction('[Login Action] fetched userDetails',props<{user:any;}>())