import { getUsersAPI } from "../../API/API"

const USERSARRAY = "USERSARRAY"
const TOTALPAGESTAKER = "TOTALPAGESTAKER"
const SETCURRENTPAGE = "SETCURRENTPAGESETCURRENTPAGE"

let initialState = {
  users:[],
  totalPages:0,
  currentPage:1
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
        totalPages: action.pages
      }
    case SETCURRENTPAGE:
      return{
        ...state,
        currentPage: action.page
      }
    default: return state
  }
}

export const usersAC = (users) => ({ type: USERSARRAY, users })

export const totalPagesAC = (pages) =>({ type: TOTALPAGESTAKER, pages })

export const currentPageAC = (page) =>({ type: SETCURRENTPAGE, page })

export const getUsersThunk = (page) => {
    return (dispatch) =>{        
        getUsersAPI(page).then((data)=>{
            dispatch(usersAC(data.data.content))
            dispatch(totalPagesAC(data.data.totalPages))
            dispatch(currentPageAC(data.data.pageable.pageNumber+1))
        })
    }
}

export default usersReducer