import { useEffect } from 'react'
import { BrowserRouter , Route} from 'react-router-dom'
import { Redirect } from 'react-router'
import { authAC, checkAuthThunk, emailAC } from './store/reducers/authReducer'
import Loading from './components/loading/loading'
import './App.css'
import AuthContainer from './pages/auth/authContainer'
import { connect } from 'react-redux'
import usersContainer from './pages/users/usersContainer'

function App(props) {

  useEffect(()=>{
    props.checkAuthThunk()
  },[])

  if(props.load) return <Loading/>

  return (
    <BrowserRouter>
      <div className="App">
      {props.auth? <Redirect to = '/users' /> : <Redirect to = '/auth' /> }
        <Route  path = '/auth' component = {AuthContainer} />
        <Route  path = '/users' component = {usersContainer} />
      </div>
    </BrowserRouter>
  );
}


const mapStateToProps = (state) => {
  return {
      auth: state.authReducer.auth,
      email: state.authReducer.email,
      load: state.authReducer.load
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      authAC(status){
        dispatch(authAC(status))
      },
      emailAC(email){
        dispatch(emailAC(email))
      },
      checkAuthThunk(){
        dispatch(checkAuthThunk())
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)