import { useState } from "react"
import { Navigate } from "react-router-dom"

const Login=()=>{
    const [email,setEmail]=useState("")
    const [passwd,setPasswd]=useState("")
    const [loginToken,setLoginToken]=useState(false)
    const [alert,setAlert]=useState(false)
    const Login_URL="https://reqres.in/api/login"
    

    async function handleSubmit(e){
        e.preventDefault();
        try {
                const data=await fetch(Login_URL,{
                method: 'POST',
                body: JSON.stringify({
                    "email": email,
                    "password": passwd
                }),
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
                }
            })
            const Info=await data.json();
        console.log(data.status)
        if (data.status==200){
            setLoginToken(Info.token)
        }
        else{
            setAlert(true)
        }}
        catch (error){
            console.error("Invalid Credentials")
        }
    }
    return (
    <section className="flex flex-wrap flex-col lg:flex-row mt-36 p-10 shadow-xl bg-red-200 lg:mx-40">
            {loginToken && <Navigate to={"../dashbord/"+loginToken} replace={true}/>}
           {/* Left Section */}
           <div className="flex flex-wrap flex-col gap-6 justify-center items-center w-[60%]">
                <h3 className="text-3xl">Welcome To Task Manager App</h3>
                <p>This is an educational project to shocase skills</p>
           </div>
           {/* Right Section */}
           <form onSubmit={e=>{handleSubmit(e)}} className="flex flex-wrap flex-col rounded-xl py-8 lg:px-12 gap-6 justify-center items-center border-2 bg-white">
                <h3>User LogIn</h3>
                <div>
                    <p className="text-xl">Email</p>
                    <input value={email} onChange={e=>{setEmail(e.target.value)}} className="border-2 border-slate-100" type="text" placeholder="example@example.com" required/>
                </div>
                <div>
                <p className="text-xl">Password</p>
                    <input value={passwd} onChange={e=>{setPasswd(e.target.value)}} className="border-2 border-slate-100" type="password" placeholder="password" required/>
                </div>
                {alert && <div className="text-sm text-red-200">Try : eve.holt@reqres.in and cityslicka</div>}
                <button className="px-8 py-2 bg-blue-200 rounded-lg" type="submit">LogIn</button>
           </form>
    </section>)
}

export default Login