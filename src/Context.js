import React ,{createContext,useEffect,useState} from "react";



export const CustomContext=createContext();


export const Context=(props)=>{
   const [moves,setMoves]=useState(0)
   const [visible,setVisible]=useState(true)
  
    const value={
        moves,
        setMoves,
        visible,
        setVisible

    }
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}