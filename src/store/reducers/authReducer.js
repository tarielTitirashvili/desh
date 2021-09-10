import { checkAuthAPI, loginAPI } from "../../API/API"

const AUTHSTATUS = "AUTHSTATUS"
const ENTEREMAIL = "ENTEREMAIL" 
const LOADSTATUS = "LOADSTATUS"
const WRONGINFO ="WRONGINFOWRONGINFO"

let initialState = {
  auth: false,
  email: "",
  pass: "",
  load: true,
  wrongInfo: false
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
    case WRONGINFO:
      return{
        ...state,
        wrongInfo: action.stat
      }
    default: return state
  }
}

export const authAC = (status) => ({ type: AUTHSTATUS, status })

export const emailAC = (email) => ({ type: ENTEREMAIL, email })

export const loadAC = (status) => ({ type: LOADSTATUS, status })

export const wrongInfoAC = (stat) => ({ type: WRONGINFO, stat })

export const CheckLoginInfoAC = (email, pass) => {
  return async (dispatch) =>{
    try{
    await loginAPI(email, pass).then((data) => {
      if(data.status === 200){
        dispatch(authAC(true))
        console.log(data)
      }
      localStorage.setItem('access_token', data.data.access_token)
    })
    }catch(e){
      dispatch(wrongInfoAC(true))
    }
  }
}

export const checkAuthThunk = () => {
  return async (dispatch) =>{
      try{
          let data = await  checkAuthAPI()
          if(data.status === 200){
            dispatch(authAC(true))
          }
          dispatch(emailAC(data.data.result.email))
          dispatch(loadAC(false))

      }catch(e){
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