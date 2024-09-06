import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";


export const Homecontext = createContext(null);

const HomecontextProvider=(props) =>{


    const contextvalue={all_product}

     return(

        <Homecontext.Provider   value={contextvalue}>
                 {props.children}

        </Homecontext.Provider>
     )



}

export default HomecontextProvider;
