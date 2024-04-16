import {signInWithPopup,createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../public/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/cordova";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app)


const Provider = ({children}) => {
    const [user , setUser] = useState(null);

    const login = (email,password) =>{
        return signInWithEmailAndPassword( auth, email, password)

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
      logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};



export default Provider;