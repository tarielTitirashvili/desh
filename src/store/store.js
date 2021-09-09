import { createStore, combineReducers, applyMiddleware , compose} from "redux"
import thunk from 'redux-thunk'
import authReducer from "./reducers/authReducer"
import usersReducer from "./reducers/usersReducer"

let reducers = combineReducers(
    {
        authReducer: authReducer,
        usersReducer: usersReducer
    }
)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
export default store