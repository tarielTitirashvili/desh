import { createStore, combineReducers, applyMiddleware , compose} from "redux"
import thunk from 'redux-thunk'
import authReducer from "./reducers/authReducer"

let reducers = combineReducers(
    {
        authReducer: authReducer
    }
)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
export default store