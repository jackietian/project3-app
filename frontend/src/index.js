import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './state/reducers'
import App from './App'

import './styles/index.scss'

const middleware = [thunk]
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
