import {
    setToken,
    setEmail,
    clearSessionStorage,
    setType,
} from '../../services/sessionStorage'
const initialState = {
    loading: false,
    currentUser: {},
    token: '',
    error: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            setEmail(action.data.result.email)
            setToken(action.data.token)
            setType(action.data.result.type)
            return {
                ...state,
                currentUser: action.data.result,
                token: action.data.token,
            }
        case 'LOGIN_FAIL':
            return {
                ...state,
                error: action.data,
            }
        case 'LOGOUT':
            clearSessionStorage()
            return {
                ...initialState,
            }
        default:
            return state
    }
}

export default authReducer
