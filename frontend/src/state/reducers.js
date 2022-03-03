import { combineReducers } from 'redux'
import authReducer from './auth/auth.reducer'
import toastsReducer from './toast/toasts.reducer'

export default combineReducers({
    auth: authReducer,
    toasts: toastsReducer,
})
