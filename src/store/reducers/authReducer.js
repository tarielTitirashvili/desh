import { checkAuthAPI, loginAPI } from "../../API/API"

const AUTHSTATUS = "AUTHSTATUS"
const ENTEREMAIL = "ENTEREMAIL" 
const LOADSTATUS = "LOADSTATUS"

let initialState = {
  auth: false,
  email: "",
  pass: "",
  load: true
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHSTATUS:
      return {
        ...state,
        auth: action.status,
      }
    case ENTEREMAIL:
      return{
        ...state,
        email: action.email
      }
    case LOADSTATUS:
      return{
        ...state,
        load: action.load
      }
    default: return state
  }
}

export const authAC = (status) => ({ type: AUTHSTATUS, status })

export const emailAC = (email) => ({ type: ENTEREMAIL, email })

export const loadAC = (status) => ({ type: LOADSTATUS, status })

export const CheckLoginInfoAC = (email, pass) => {
  return (dispatch) =>{
    loginAPI(email, pass).then((data) => {
      if(data.status === 200){
        dispatch(authAC(true))
      }
      localStorage.setItem('access_token', data.data.access_token)
    })
  }
}

export const checkAuthThunk = () => {
  return async (dispatch) =>{
      try{
          let data = await  checkAuthAPI()
          console.log(data)
          if(data.status === 200){
            dispatch(authAC(true))
          }
          dispatch(emailAC(data.data.result.email))
          dispatch(loadAC(false))

      }catch(e){
        console.log(e)
        dispatch(loadAC(false))
      }
  }
}

export const logOutThunk = () => {
  return (dispatch) =>{
    dispatch(authAC(false))
    localStorage.removeItem("access_token") 
  }
}

export default authReducer