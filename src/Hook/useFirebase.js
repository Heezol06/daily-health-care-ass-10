import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut , GithubAuthProvider, createUserWithEmailAndPassword , signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../component/Login/Firebase/Firebase.init";


initializeAuthentication()
const useFirebasae = () =>{
    
    const [user, setUser] = useState({});
    const [isLoading ,setIsLoading ] = useState(true);
    const auth = getAuth();

    const signInUsingGoogle=()=>{
        const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider)
        .then(result =>{
            console.log(result.user)
        })
        .finally(()=> setIsLoading(false))
    }
    const signInUsingGithub =()=>{
        const githubProvider = new GithubAuthProvider();
      return  signInWithPopup(auth, githubProvider)
        .then(result=>{
            console.log(result.user)
        })
    }

    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(user);
            }else{
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unSubscribed;
    },[])

    const logOut=() =>{
        setIsLoading(true);
        const auth = getAuth();
            signOut(auth).then(() => {

            })
            .finally(()=> setIsLoading(false))
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
        handleUserLogin, 
        isLoading
    }
}
export default useFirebasae;