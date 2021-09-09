import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsersThunk } from '../../store/reducers/usersReducer'
import { logOutThunk } from '../../store/reducers/authReducer'
import Users from './users'

export function UsersContainer (props) {
    useEffect(()=>{
        props.getUsersThunk()
    },[])


    return(
        <> <Users 
          email = {props.email}
          users = {props.users}
          totalPages = {props.totalPages}
          logOutThunk = {props.logOutThunk}
        /> </>
    )
}
 
const mapStateToProps = (state) => {
    return {
        email: state.authReducer.email,
        users: state.usersReducer.users,
        totalPages: state.usersReducer.totalPages,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUsersThunk(page) {
            dispatch(getUsersThunk(page))
        },logOutThunk(){
            dispatch(logOutThunk())
        }
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)