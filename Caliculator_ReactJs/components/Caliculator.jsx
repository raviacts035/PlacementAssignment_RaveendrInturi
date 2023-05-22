import React, { useCallback, useState,useContext } from "react";
import ThemeContext from "../utils/UserContext";



const arr=["Ac","C",7,8,9,"/",4,5,6,"-",1,2,3,"+",0,"."]

const Caliculator=()=>{
    // Context holding Variables
    const {theme}=useContext(ThemeContext)

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
        <section style={theme.dark===true?{backgroundColor:"black",color:"white"}:{backgroundColor:"white",color:"black"}} id="case">
                {console.log(theme)}
        <div id="screen">{value}</div>
        <div id="pad">
            {arr.map(e=>{
                return <button style={theme.dark===true?{border:"2px solid #ffff"}:{border:"2px solid #000000"}} id={e} onClick={()=>handleClick(e)}>{e}</button>
            })}
            <button id="Equal" onClick={()=>handleClick("=")}>=</button>
        </div>
        </section>
    );
}



export default Caliculator