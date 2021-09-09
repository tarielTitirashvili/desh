import { getUsersAPI } from "../../API/API"

const USERSARRAY = "USERSARRAY"
const TOTALPAGESTAKER = "TOTALPAGESTAKER"


let initialState = {
    users:[],
    totalPages:0
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERSARRAY:
      return {
        ...state,
        users: action.users,
      }
    case TOTALPAGESTAKER:
        return{
            ...state,
            users: action.page
        }
    default: return state
  }
}

export const usersAC = (users) => ({ type: USERSARRAY, users })

export const totalPagesAC = (page) =>({ type: TOTALPAGESTAKER, page })

export const getUsersThunk = (page) => {
    return (dispatch) =>{        
        getUsersAPI(page).then((data)=>{
            console.log(data)
            dispatch(usersAC(data.data.content))
            dispatch(totalPagesAC(data.data.totalPages))
        })
    }
}

export default usersReducer