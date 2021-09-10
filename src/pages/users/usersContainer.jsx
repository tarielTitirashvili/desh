import { useEffect } from 'react'
import { connect } from 'react-redux'
import { currentPageAC, getUsersThunk } from '../../store/reducers/usersReducer'
import { checkAuthThunk, logOutThunk } from '../../store/reducers/authReducer'
import Users from './users/users'

export function UsersContainer (props) {
    useEffect(()=>{
        props.getUsersThunk()
        props.checkAuthThunk()
    },[])
        


    return(
        <> <Users 
          getUsersThunk = {props.getUsersThunk}
          currentPage = {props.currentPage}
          email = {props.email}
          users = {props.users}
          totalPages = {props.totalPages}
          logOutThunk = {props.logOutThunk}
          currentPageAC = {props.currentPageAC}
        /> </>
    )
}
 
const mapStateToProps = (state) => {
    return {
        email: state.authReducer.email,
        users: state.usersReducer.users,
        totalPages: state.usersReducer.totalPages,
        currentPage: state.usersReducer.currentPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUsersThunk(page) {
            dispatch(getUsersThunk(page))
        },logOutThunk(){
            dispatch(logOutThunk())
        }, currentPageAC(page){
            dispatch(currentPageAC(page))
        },checkAuthThunk(){
            dispatch(checkAuthThunk())
        }
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
