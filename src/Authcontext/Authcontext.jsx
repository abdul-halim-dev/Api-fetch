import { createContext, useState } from "react";


export const Authcontext = createContext();



const ContextProvider = ({children})=>{
    const [taskwrapper, settaskwrapper] = useState([])
    console.log(taskwrapper)
    return(
        <Authcontext.Provider value={{taskwrapper, settaskwrapper}}>
            {children}
        </Authcontext.Provider>
    )
}

export default ContextProvider