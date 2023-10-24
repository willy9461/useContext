import React, { useContext, useState}  from "react";

const userContext = React.createContext();

const userToggleContext = React.createContext();

export function useUserContext () {
    return useContext(userContext);
}

export function useUserToggleContext () {
    return useContext(userToggleContext);
}


export function UserProvider ({children}) {
    const [user, setUser] = useState(null);
    
    const cambiaLogin = () => {
      if (user) { setUser(null);
      } else { 
        setUser({
          name: 'Luis',
          email: 'luis@mail.com',
        })
      }
    };

    return (
        <userContext.Provider value={user}> 
            <userToggleContext.Provider value={cambiaLogin}>
                {children}
            </userToggleContext.Provider>
         </userContext.Provider>
       

    );
}  