import { createContext, useState } from "react";

const userContext = createContext();

export const UserProvider = ({children}) => {
    const [uName, setUName] = useState(); // put the value in the useState that you want to be context level

    return <userContext.Provider value = {{uName}}>
        {children}
    </userContext.Provider>
}

export default userContext