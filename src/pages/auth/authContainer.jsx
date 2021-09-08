import Auth from "./auth"
import { connect } from 'react-redux'
import { authAC, enterEmailAC, enterPassAC, getUsersThunkAC } from '../../store/reducers/authReducer'
 
const mapStateToProps = (state) => {
    return {
        auth: state.authReducer.auth,
        email: state.authReducer.email,
        pass: state.authReducer.pass,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        authAC(status) {
            dispatch(authAC(status))
        },
        enterEmailAC(email){
            dispatch(enterEmailAC(email))
        },
        enterPassAC(pass){
            dispatch(enterPassAC(pass))
        },
        getUsersThunkAC(email, pass){
            dispatch(getUsersThunkAC(email, pass))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth)