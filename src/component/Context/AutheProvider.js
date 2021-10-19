import React, { createContext } from 'react';
import useFirebasae from '../../Hook/useFirebase';

export const AuthContext = createContext() 

const AutheProvider = ({children}) => {
    const allContext = useFirebasae();
    return (
        <AuthContext.Provider value={allContext}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AutheProvider;