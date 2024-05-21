import React, { createContext, useContext, useState } from 'react';

// crucial for creating a mechanism to share data between components without having to 
// pass props explicitly through the component tree.
const UniversalLoginStateContext = createContext(); // keep track of if they are logged in or not

// A hook to access the login state and update methods 
export function useLoginState() { 
    return useContext(UniversalLoginStateContext);
  }

  // encapsulates the login state and update methods.
  export function UniversalLoginProvider({ children })
  {
    // manage the isLoggedIn state / allow it to be updated
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    const updateIsLoggedIn = (newState) => 
    {
        console.log(isLoggedIn);
        setIsLoggedIn(newState);
    }

    const contextLoginValue = 
    {
        isLoggedIn,
        updateIsLoggedIn,
    }

    return (
        <UniversalLoginStateContext.Provider value={contextLoginValue}>
            { children }
        </UniversalLoginStateContext.Provider>
    )
  }
