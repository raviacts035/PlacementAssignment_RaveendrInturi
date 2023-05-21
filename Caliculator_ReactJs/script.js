import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";

const Screen=document.getElementById(screen);

// array of caliculator charecters
const arr=[7,8,9,"/",4,5,6,"-",1,2,3,"+",0,"."]

const AppLayout=()=>{
    const [value,setValue]=useState("")
    const handleClick=useCallback((val)=>{
        if(val=="="){
            setValue(eval(value))
        }
        else if(val=="Ac"){
            setValue("")
        }
        else if(val=="C"){
            if(typeof(value)!='string') return
            setValue(value.slice(0,-1))
        }
        else
        {setValue(value+val)}
    })
    return(
        <section id="case">
        <div id="screen">{value}</div>
        <div id="pad">
            <button id="Ac" onClick={()=>handleClick("Ac")}>Ac</button>
            <button id="C" onClick={()=>handleClick("C")}>C</button>
            {arr.map(e=>{
                return <button key={e} onClick={()=>handleClick(e)}>{e}</button>
            })}
            <button id="Equal" onClick={()=>handleClick("=")}>=</button>
        </div>
        </section>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)