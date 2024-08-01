import {createContext , useContext} from "react";


const AuthContext = createContext();



const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error , setError] = useState(null);

    const handleSignInWithGoogle = async () => {
        
    }
  return (
    <AuthContext.Provider>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider