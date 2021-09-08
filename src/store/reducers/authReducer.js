import { login } from "../../API/API"

const authStatus = "authStatus"
const enterEmail = "enterEmail"
const enterPass = "enterPass"


let initialState = {
  auth: false,
  email: "",
  pass: "",
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authStatus:
      return {
        ...state,
        auth: action.status,
      }
    case enterEmail:
      return{
        ...state,
        email: action.email
      }
    case enterPass:
      return {
        ...state,
        pass: action.pass
      }  
    default: return state
  }
}

export const authAC = (status) => ({ type: authStatus, status })

export const enterEmailAC = (email) => ({ type: enterEmail, email })

export const enterPassAC = (pass) => ({ type: enterPass, pass })



export const getUsersThunkAC = (email, pass) => {
  return (dispatch) =>{

    login(email, pass).then((data) => {
      console.log(data)
    })
  }
}

export default authReducer
