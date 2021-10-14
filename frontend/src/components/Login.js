import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    validateEmail,
    validatePassword,
    isAuthenticated,
} from '../services/utils'
import { login } from '../actions/auth.action'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordErrors, setPasswordErrors] = useState([])
    const [emailErrors, setEmailErrors] = useState([])

    const handleChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
        const foundErrors = validateEmail(value)
        if (foundErrors) setEmailErrors(foundErrors)
    }

    const handleChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
        const foundErrors = validatePassword(value)
        if (foundErrors) setPasswordErrors(foundErrors)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await dispatch(login({ email, password }))
        if (result.type === 'LOGIN_SUCCESS') {
            console.log('==========')
            history.replace('/home')
            console.log('==========')
        }
    }

    const handleReset = () => {
        setEmail('')
        setPassword('')
    }

    useEffect(() => {
        if (isAuthenticated()) {
            history.replace('/home')
        }
    }, [])

    return (
        <main onSubmit={handleSubmit}>
            <form>
                <section>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChangeEmail}
                    />
                </section>
                <section>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleChangePassword}
                    />
                </section>

                <button type="reset" onClick={handleReset}>
                    cancel
                </button>
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default Login
