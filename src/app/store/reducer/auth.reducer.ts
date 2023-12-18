import { createReducer, on } from "@ngrx/store";
import { autoLogin, fetchedUser, loggedIn, login } from "../actions/auth.action";

interface AuthState {
    isLoggedIn: boolean;
    authToken: string | null;
    user: any | null | object;
}
const state: AuthState = {
    isLoggedIn: false,
    authToken: null,
    user: null
}
const _authReducer = createReducer(state,
    on(login, (state, { email, password }) => { console.log(password); return state }),
    on(loggedIn, (state, { authToken }) => { console.log('using auth effect',authToken); localStorage.setItem('token', authToken); return ({ ...state,authToken: authToken }) }),
    on(autoLogin, (state) => {
        let token = localStorage.getItem('token')
        if (token) {
            return { authToken: token }
        }
        return { ...state,authToken: null }
    }),
    on(fetchedUser, (state, { user }) =>{ console.log("fetched user",user);return({...state, user: user })})
)

interface AppState {
    auth:AuthState
}
export const authSelector=(state:AppState)=>state.auth
export function authReducer(state, action) {
    return _authReducer(state, action)
}