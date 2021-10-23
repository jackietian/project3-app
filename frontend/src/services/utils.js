import { getEmailAndToken } from './sessionStorage'
const validateEmail = (email) => {
    const errors = []
    if (email === '') errors.push('Email is required')

    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regex.test(email)) errors.push('Incorrect email')
    return errors
}

const validatePassword = (pwd) => {
    const errors = []
    if (pwd.length <= 4) errors.push('Password length should be more than 4')

    if (pwd === '1234' || pwd === 'asdf')
        errors.push('Common password detected')

    return errors
}

const parseJwt = (token) => {
    var base64Url = token.split('.')[1]
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    var jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
            })
            .join('')
    )

    return JSON.parse(jsonPayload)
}

const isJWTExpired = (token) => {
    const { exp } = parseJwt(token)
    return exp * 1000 < new Date().getTime()
}

const isAuthenticated = () => {
    const { token } = getEmailAndToken()

    return token
}

const isAuthorized = (path) => {
    const type = sessionStorage.getItem('type')

    if (type === 'staff' && path === '/chat') {
        return false
    }

    return true
}

export {
    validateEmail,
    validatePassword,
    isJWTExpired,
    isAuthenticated,
    isAuthorized,
}
