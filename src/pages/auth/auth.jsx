import React, { useState } from "react"
import css  from './auth.module.css'

export default function Auth (props) {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [emailValidator, setEmailValidator] = useState(false)
    const [requiredField, setRequiredField] = useState(false)
    const [requiredEmail, setRequiredEmail] = useState(false)

    function validation(email) {
        const atSign = email.indexOf('@')
        const point = email.indexOf('.')
        if((point-atSign)<1){
            setEmailValidator(true)
        }else if( point===email.length ){
            setEmailValidator(true)
        }else if( (point+1)===email.length ){
            setEmailValidator(true)
        }else{
            setEmailValidator(false)
        }
    }
    function requiredValidator(string) {
        const word =  string.length
        if(word<=1){
            setRequiredField(true)
        }else{
            setRequiredField(false)
        }
    }
    function requireEmailValidator(string) {
        const word =  string.length
        if(word<=1){
            setRequiredEmail(true)
        }else{
            setRequiredEmail(false)
        }
    }

    const onsubmit = (email, pass) => {
        props.CheckLoginInfoAC(email, pass)
        
    }
    function handleSubmit(event) {
        event.preventDefault();
      }
    
    return(
        <div style = {{height: window.innerHeight}} className = {css.wrapper}>
             <form  onSubmit={handleSubmit} className = {css.container}  >
                 <div className = {css.auth_info_container}>
                     <label htmlFor = "email" ></label>
                    <input required id = "email" className = {css.auth_inputs} onChange = {(e)=> {
                        setEmail(e.target.value)
                        validation(e.target.value)
                        requireEmailValidator(e.target.value)
                    }} type="email" placeholder = "enter your email" value = {email}/>
                    {emailValidator?
                        <div className = {css.error_massage} >
                            The is not a valid email address.
                        </div>:""
                    }
                    {requiredEmail?
                        <div className = {css.error_massage} >
                            please enter your email Address.
                        </div>:""
                    }
                    <label htmlFor = "password" ></label>
                    <input name = "password" required className =  {css.auth_inputs} onChange = {(e)=> {
                        requiredValidator(e.target.value)
                        setPass(e.target.value)}
                } type="password" placeholder = "enter your password" value = {pass}/>
                {requiredField?
                        <div className = {css.error_massage} >
                            please enter your email Address.
                        </div>:""
                    }
                </div>
                <div className = {css.login_container}>
                    <button onClick = {()=>onsubmit(email,pass)} className = {css.login} > Login </button>
                </div>
                {props.wrongInfo? <div className ={css.error_massage} > email or password is wrong </div>:"" }
            </form>
        </div>
    )
}