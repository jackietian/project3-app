import { Route, Redirect, useHistory, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { isAuthenticated } from '../services/utils'
import { logout } from '../state/auth/auth.action'

const ProtectedRoute = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        history.replace('/')
    }

    if (isAuthenticated()) {
        return (
            <>
                <header>
                    <h1>Demo P3</h1>
                    <ul>
                        <li>
                            <NavLink to="/home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/calendar">Calendar</NavLink>
                        </li>
                        <li onClick={handleLogout}>Logout</li>
                    </ul>
                </header>
                <main>
                    <Route {...props} />
                </main>
            </>
        )
    }

    return <Redirect to="/" />
}

export default ProtectedRoute
