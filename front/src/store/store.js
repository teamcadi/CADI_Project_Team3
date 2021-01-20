import {createStore, combineReducers} from "redux"
import login_reducer from "./reducers/login_reducer"


export default createStore(combineReducers({
    login_reducer,
}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())