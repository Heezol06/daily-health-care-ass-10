import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut , GithubAuthProvider, createUserWithEmailAndPassword , signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../component/Login/Firebase/Firebase.init";


initializeAuthentication()
const useFirebasae = () =>{
    
    const [user, setUser] = useState({});
    const auth = getAuth();

    const signInUsingGoogle=()=>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user)
        })
    }
    const signInUsingGithub =()=>{
        const githubProvider = new GithubAuthProvider();
        signInWithPopup(auth, githubProvider)
        .then(result=>{
            setUser(result.user)
        })
    }

    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(user);
            }else{
                setUser({})
            }
        })
        return unSubscribed;

    },[])

    const logOut=() =>{
        const auth = getAuth();
            signOut(auth).then(() => {

            })
    }

    const handleUserRegistration = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result.user)
        })
    }
    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            setUser(result.user);
          })
        }
    
    return {
        user,
        signInUsingGoogle,
        signInUsingGithub,
        logOut,
        handleUserRegistration,
        handleUserLogin
    }
}
export default useFirebasae;