import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { clearNoteLogout } from "../journal"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const resp = await signInWithGoogle();
        console.log({result: resp})
        if(!resp.ok) return dispatch(logout({errorMessage: resp.errorMessage}));
        dispatch(login(resp))
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const resp = await registerUserWithEmailPassword({email, password, displayName});
        // console.log(resp);
        if(!resp.ok) return dispatch(logout({errorMessage: resp.errorMessage}));
        dispatch(login(resp));
    }
}

export const startLoginWithEmailPassword = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const resp = await loginWithEmailPassword(email, password);
        console.log(resp);
        if(!resp.ok) return dispatch(logout({errorMessage: resp.errorMessage}));
        dispatch(login(resp));       
    }
}

export const startLogout = () => {
    return async(dispatch) => {
        await  logoutFirebase();
        dispatch(clearNoteLogout());
        dispatch(logout());     
    }
}