import { loginApi } from '../../api/auth'
const login = (data) => {
    return (dispatch) => {
        return loginApi(data)
            .then((res) => dispatch(loginSuccess(res.data)))
            .catch((e) => dispatch(loginFail(e.response.data.message)))
    }
}

const loginSuccess = (data) => ({
    type: 'LOGIN_SUCCESS',
    data,
})

const loginFail = (data) => ({
    type: 'LOGIN_FAIL',
    data,
})

const logout = () => ({
    type: 'LOGOUT',
})

export { login, logout, loginSuccess }
