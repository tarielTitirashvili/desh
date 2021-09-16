import React from "react"
import Pagination from "../../../components/pagination/pagination"
import User from "../user/user"
import css from './usersNav.module.css'
import UsersFilter from "../usersFilter/usersFilter"

export default function UsersNav(props) {

    return(
        <div>
            <div>
                <UsersFilter
                  getUsersThunk = {props.getUsersThunk}
                  AccountID = {props.AccountID}
                  accountIdAC = {props.accountIdAC}
                />
            </div>
            <div className = {css.nav}>
                <div className = {css.Account_id}>
                    AccountID
                </div>
                <div className = {css.info_column}>
                    Email
                </div>
                <div className = {css.info_column}>
                    Name
                </div>
                <div className = {css.info_column}>
                    Phone
                </div>
                <div className = {css.info_column}>
                    Status
                </div>
                <div className = {css.info_column}>
                    Blocked
                </div>
                <div className = {css.info_column}>
                    Registration date
                </div>
            </div>
            <div>
                {props.users.length?
                    props.users.map((user)=>{
                        return<User
                            key = {user.id}
                            id = {user.id}
                            name = {user.name}
                            phone = {user.phone}
                            email = {user.email}
                            registrationDate = {user.registrationDate}
                            status = {user.status}
                            updateDate = {user.updateDate}
                            ventisAccountId = {user.ventisAccountId}
                            blocked = {user.blocked}
                        />
                    }):<></>
                }
                <div className = {css.pagination}>
                <Pagination
                    getUsersThunk = {props.getUsersThunk}
                    currentPage = {props.currentPage}
                    currentPageAC = {props.currentPageAC}
                    totalPages = {props.totalPages}
                />
                </div>
            </div>
        </div>

    )
}
