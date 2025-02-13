import React, { createContext, useState } from 'react'

export const Usercontext = createContext(); 

const Context = (props) => {

    const [data,setData] = useState([]);

  return (
    <Usercontext.Provider value={{data,setData}}>
        {props.children}
    </Usercontext.Provider>
  )
}

export default Context