import { getUsersAPI } from "../../API/API"

const USERSARRAY = "USERSARRAY"
const TOTALPAGESTAKER = "TOTALPAGESTAKER"
const SETCURRENTPAGE = "SETCURRENTPAGESETCURRENTPAGE"
const SERACCOUNTID = "SETACCOUNTID"

let initialState = {
  users:[],
  totalPages:0,
  currentPage:1,
  AccountID : null,
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
    case SERACCOUNTID:
      return{
        ...state,
        AccountID: action.accountID
      }
    default: return state
  }
}

export const usersAC = (users) => ({ type: USERSARRAY, users })

export const totalPagesAC = (pages) =>({ type: TOTALPAGESTAKER, pages })

export const currentPageAC = (page) =>({ type: SETCURRENTPAGE, page })

export const accountIdAC = (accountID) =>({ type: SERACCOUNTID, accountID })

export const getUsersThunk = (page,AccountID, email, name ) => {
    return (dispatch) =>{        
        getUsersAPI(page, AccountID, email, name).then((data)=>{
            dispatch(usersAC(data.data.content))
            dispatch(totalPagesAC(data.data.totalPages))
            dispatch(currentPageAC(data.data.pageable.pageNumber+1))
        })
    }
}

export default usersReducer