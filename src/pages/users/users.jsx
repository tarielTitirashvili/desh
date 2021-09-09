import React, { useEffect, useState } from "react"
import css  from './users.module.css'
import Header from '../../components/header/header'

export default function Users (props) {
    
    return(
        <div >
            <Header logOutThunk = {props.logOutThunk} />
        </div>
    )
}