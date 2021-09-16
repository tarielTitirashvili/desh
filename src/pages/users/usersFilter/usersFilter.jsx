import React, { useState } from "react";
import css from './usersFilter.module.css'

export default function UsersFilter(props) {
    const[seeFilterInput, setSeeFilterInput] = useState(false)


    
    return(
        <div className = {css.container}>
            Filter
            <div className = {css.account_id} >
                <div onClick = {() => setSeeFilterInput(!seeFilterInput)} >
                    AccountID
                </div> 
                <div  style = {{display: `${seeFilterInput?'inline-block' : 'none' }`}} >
                    <input type="number" value = {props.AccountID} onChange = {(e)=> props.accountIdAC(e.target.value)} />
                </div>
            </div>
            <button className = {css.find_button} onClick = {()=>props.getUsersThunk(1,props.AccountID)} >
                find
            </button>
        </div>
    )
}