import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({    prompt: 'select_account'})

export const signInWithGoogle = async() => {
    try{
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        //const credentials = GoogleAuthProvider.credentialFromResult(result) 
        //console.log({credentials})
        //const user = result.user;
        //console.log({user})
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            //USer info
            displayName, email, photoURL, uid
        }

    }catch(error){
        console.log({error})

        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used
        const email = error.customData.email;
        // The AuthCredential type that was used
        const credential = GoogleAuthProvider.credentialFromError(error)
        
        return {
            ok: false,
            errorMessage,

        }
    }
}