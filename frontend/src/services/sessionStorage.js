const setToken = (token) => sessionStorage.setItem('token', token)
const setEmail = (email) => sessionStorage.setItem('email', email)
const setType = (type) => sessionStorage.setItem('type', type)

const getEmailAndToken = () => ({
    email: sessionStorage.getItem('email'),
    token: sessionStorage.getItem('token'),
})

const clearSessionStorage = () => sessionStorage.clear()

export { setToken, setEmail, clearSessionStorage, getEmailAndToken, setType }
