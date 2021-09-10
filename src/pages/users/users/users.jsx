import React from "react"
import css  from './users.module.css'
import Header from '../../../components/header/header'
import User from "../usersNav/usersNav"
import UsersTotalInfo from "../usersTotalInfo/usersTotalInfo"

export default function Users (props) {
    
    return(
        <div>
            <Header 
                logOutThunk = {props.logOutThunk} 
                email = {props.email}
            />
            <div className = {css.desh_container}>
                <div style = {{'height': window.innerHeight}} className = {css.nav}>users
                </div>
                <div className = {css.users_container}>
                    <div className = {css.user_Container}>
                        <User 
                            getUsersThunk = {props.getUsersThunk}
                            users = {props.users} 
                            currentPage = {props.currentPage}
                            currentPageAC = {props.currentPageAC}
                            totalPages = {props.totalPages}
                        />
                    </div>
                </div>
                <div>
                    <UsersTotalInfo
                        users = {props.users}
                    />
                </div>
            </div>
        </div>
    )
}