import {createContext, useState,useContext,useEffect, Children} from "react"
import React from "react"
let Context = createContext()


function ContextDataProvider({children}){

 
    const [search,setSearch] = useState("")
    
 
  

return(

<Context.Provider value={{ search,setSearch}}>{children}</Context.Provider>

)


}


let useContextValue = () => useContext(Context);

export {useContextValue,ContextDataProvider}

