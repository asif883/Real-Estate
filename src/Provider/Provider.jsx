import {signInWithPopup,createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../public/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const facebookProvider =new FacebookAuthProvider();

const githubLoginProvider = new GithubAuthProvider()

const auth = getAuth(app)


const Provider = ({children}) => {
    const [user , setUser] = useState(null);

    const login = (email,password) =>{
        return signInWithEmailAndPassword( auth, email, password)

     }

     const githubLogin = ()=>{
        return signInWithPopup (auth,githubLoginProvider)
     }

     const facebookSignIn =()=>{
        return signInWithPopup (auth,facebookProvider)
     }

     const singINGoogle = ()=>{
        return signInWithPopup (auth, googleProvider)
     }

     const logOut = () =>{
        return signOut(auth)
     }

     useEffect (()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser (currentUser)
        }) 
        return () =>{
            unSubscribe()
        } 
      },[])

     const createUser =(email,password)=>{
        return createUserWithEmailAndPassword (auth,email,password)
     } 

    const authInfo ={
      createUser,
      user,
      login,
      singINGoogle,
      facebookSignIn,
      githubLogin,
      logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};



export default Provider;