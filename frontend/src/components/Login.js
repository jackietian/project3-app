import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { isAuthenticated } from '../services/utils'
import { login } from '../state/auth/auth.action'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [email, setEmail] = useState('bar@gmail.com')
    const [password, setPassword] = useState('123')

    const handleChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }

    const handleChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await dispatch(login({ email, password }))
        if (result.type === 'LOGIN_SUCCESS') {
            history.replace('/home')
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
    })

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

                <section className="actions">
                    <button type="reset" onClick={handleReset}>
                        cancel
                    </button>
                    <button type="submit">Submit</button>
                </section>
            </form>
        </main>
    )
}

export default Login
