import {createContext} from "react";


const ThemeContext=createContext(
    {
        theme:{
        dark:false
        },
        setTheme:(theme)=>{

        }
    }
)

export default ThemeContext;