import React, { useCallback, useState,useContext } from "react";
import ReactDOM from "react-dom/client";
import ThemeContext from "./utils/UserContext";
import Caliculator from "./components/Caliculator";
import NavBar from "./components/NavBar";


//Context API, CreateContext


// array of caliculator charecters
const AppLayout=()=>{
    const [theme,setTheme]=useState(
        {
            dark:false
        }
    );
    
    return(
        <main>
        <ThemeContext.Provider value={{
                theme:theme,
                setTheme
        }}>
            {/* Navigation Bar */}
            <NavBar/>
            <div class="calc"><h2>CALCULATOR</h2></div>
            {/* Cakiculator App Body */}
            <Caliculator />
            </ThemeContext.Provider>
        </main>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)