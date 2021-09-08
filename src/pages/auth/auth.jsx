import React, { useState } from "react"
import css  from './auth.module.css'

export default function Auth (props) {
    let [email, setEmail] = useState("")
    let [pass, setPass] = useState("")


    const onsubmit = (email, pass) => {
        props.getUsersThunkAC(email, pass)
    }
    
    return(
        <div style = {{height: window.innerHeight}} className = {css.wrapper}>
             <div className = {css.container} >
                 <div className = {css.auth_info_container}>
                    <input className = {css.auth_inputs} onChange = {(e)=> setEmail(e.target.value)} type="email" placeholder = "enter your email" value = {email}/>
                    <input className =  {css.auth_inputs} onChange = {(e)=> setPass(e.target.value)} type="password" placeholder = "enter your password" value = {pass}/>
                </div>
                <div className = {css.login_container}>
                    <div onClick = {()=>onsubmit(email,pass)} className = {css.login} > Login </div>
                </div>
            </div>
        </div>
    )
}