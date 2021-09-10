import React, { useState } from "react"
import css from "./user.module.css"

export default function User(props) {
    const[infoStatus, setInfoStatus] = useState(false) 
    function allInfo() {
        setInfoStatus(!infoStatus)
    }

    return(
        <div>
            <div onClick = {()=>allInfo()}  className = {css.container} >
                <div className = {css.user_id} > {props.id} </div>
                <div className = {css.user_infos} > {props.email} </div>
                <div className = {css.user_infos} > {props.name} </div>
                <div className = {css.user_infos} > {props.phone} </div>
                <div className = {css.user_infos} > {props.status? <button className= {css.active_button}>active</button>: <button>info</button> } </div>
                <div className = {css.user_infos} > {props.blocked} </div>
                <div className = {css.user_infos} > {props.registrationDate} </div>
            </div>
            {
            infoStatus? 
            <div className = {css}>
                <div  className = {css.additional_info} >
                    <div className = {css.additional_info_title}>Registration date:</div>
                    <div className = {css.user_infos} > {props.registrationDate} </div>
                </div>
                <div className = {css.additional_info}>
                    <div className = {css.additional_info_title}> Update date: </div>
                    <div className = {css.user_infos} > {props.updateDate} </div>
                </div>
                <div className = {css.additional_info}>
                    <div className = {css.additional_info_title} > Ventis account ID: </div>
                    <div className = {css.user_infos} > {props.ventisAccountId} </div>
                </div>
            </div>
            :
            ""
            }
            
        </div>
    )
}