import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Calendar from './components/Calendar'
import Search from './components/Search'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <ProtectedRoute path="/home" exact component={Home} />
                <ProtectedRoute path="/calendar" exact component={Calendar} />
                <ProtectedRoute path="/search" exact component={Search} />
                <Route>
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
