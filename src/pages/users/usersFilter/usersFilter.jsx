import React, { useState } from "react";
import css from './usersFilter.module.css'

export default function UsersFilter(props) {
    const[seeFilterInput, setSeeFilterInput] = useState(false)
    const[email,setEmail] = useState(null)
    const[name,setName] = useState(null)

    
    return(
        <div>
            <div className = {css.filter_container} onClick = {() => setSeeFilterInput(!seeFilterInput)}>
                Filter
            </div>
            <div  className = {css.container} style = {{display: `${seeFilterInput?'flex' : 'none' }`}} >
                <div className = {css.wrapper} >
                    <div className = {css.filter_title}>
                        AccountID
                    </div>
                    <div>
                        <input type="number" value = {props.AccountID} onChange = {(e)=> props.accountIdAC(e.target.value)} />
                    </div>
                </div>
                <div className = {css.wrapper}>
                    <div className = {css.filter_title}>
                        Email
                    </div>
                    <div>
                        <input type="email" value = {email} onChange = {(e)=> setEmail(e.target.value)} />
                    </div>
                </div>
                <div className = {css.wrapper}>
                    <div className = {css.filter_title}>
                        Name
                    </div>
                    <div>
                        <input type="text" value = {name} onChange = {(e)=> setName(e.target.value)} />
                    </div>
                </div>
                <button className = {css.find_button} onClick = {()=>props.getUsersThunk(1,props.AccountID, email, name)} >
                    find
                </button>
            </div>
                
        </div>
    )
}