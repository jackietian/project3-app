import { Route, Redirect, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { isAuthenticated } from '../services/utils'
import { logout } from '../actions/auth.action'

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
                    <button onClick={handleLogout}>Logout</button>
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
