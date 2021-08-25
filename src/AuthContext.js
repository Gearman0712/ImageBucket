import React ,{useContext,useState,useEffect} from 'react'
import {auth} from './firebase.js'
const AuthContext= React.createContext();
export function useAuth()
{
 return useContext(AuthContext);

}
export function AuthProvider({children})
{   const[currentUser,setCurrentUser] = useState();
    const[loading,setLoading] = useState(true);
    function signup(email ,password){
        console.log('insignup');
        console.log(`${email} ${password}`);
        const y= auth.createUserWithEmailAndPassword(email, password);
        console.log(y);
        return y;
    }
    function login(email ,password){
    
        const y= auth.signInWithEmailAndPassword(email, password);
        return y;
    }
    function logout(){
    
        const y= auth.signOut();
        return y;
    }



    useEffect (()=>{
    const unsubscribe =  auth.onAuthStateChanged(user =>{
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe
    },[]);
    
     const value=
    {
        currentUser,
        signup,
        login,
        logout
    }

    return(
        <AuthContext.Provider value ={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}



