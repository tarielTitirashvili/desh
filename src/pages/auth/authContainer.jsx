import Auth from "./auth"
import { connect } from 'react-redux'
import { authAC, CheckLoginInfoAC } from '../../store/reducers/authReducer'
 
const mapStateToProps = (state) => {
    return {
        auth: state.authReducer.auth,
        email: state.authReducer.email,
        wrongInfo: state.authReducer.wrongInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        authAC(status) {
            dispatch(authAC(status))
        },
        CheckLoginInfoAC(email, pass){
            dispatch(CheckLoginInfoAC(email, pass))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth)