import ThemeContext from "../utils/UserContext";
import { useContext } from "react";


const NavBar=()=>{
    const {theme, setTheme}=useContext(ThemeContext)

    return (
        <nav>
            <div id="logo">Logo</div>
            <ul>
                <li id="dashbord">
                    <h3>DashBoard</h3>
                    <hr/>
                </li>
                <li>Features</li>
                <li>Documentation</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            <button onClick={()=>{
                setTheme(theme.dark===false?{dark:true}:{dark:false})
            }}>{theme.dark===true?<span>Light</span>:<span>Dark</span>}</button>
        </nav>
    )
}

export default NavBar