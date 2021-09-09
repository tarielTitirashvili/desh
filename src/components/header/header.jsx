import React from "react"
import css from "./header.module.css"

export default function Header(props) {
    
    
    return(
        <div className = {css.header_container} >
            <img className = {css.logo} src="	http://ventis-dashboard-web.s3-website.eu-central-1.amazonaws.com/static/media/logo.295c02f6.svg" alt="ventis" />
            <button onClick = {()=>props.logOutThunk()} className = {css.log_out} >Log Out</button>
        </div>
    )
}