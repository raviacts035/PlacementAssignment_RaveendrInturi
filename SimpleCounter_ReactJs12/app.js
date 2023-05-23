import React,{useState} from "react";
import ReactDOM from "react-dom/client";

const Counter=()=>{
    const [count,setCount]=useState(0);
    
    const  incimentCount=()=>{
        setCount(count+1)
    }

    const decrementCount=()=>{
        setCount(count-1)
    }
    const resetCount=()=>{
        setCount(0)
    }
    return(
        <section>
            <h2 id="banner">Simple Counter App</h2>
            <div id="container">
                <p id="Title">Count</p>
                <div id="btnGrup">
                    <button id="decrement" onClick={()=>{decrementCount()}}>-1 reduce</button>
                    <div id="display">{count}</div>
                    <button id="increment" onClick={()=>{incimentCount()}}>+1 Increment</button>
                </div>
                <button id="reset" onClick={()=>{resetCount()}}>Reset</button>
            </div>
        </section>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter/>)