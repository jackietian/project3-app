import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../state/reducers'
import { login } from '../state/auth/auth.action'
import mockedAxios from 'axios'
// import MockAdapter from 'axios-mock-adapter'
// const mock = new MockAdapter(axios)

describe('test login action and reducer', () => {
    let store
    beforeEach(() => {
        store = createStore(reducers, applyMiddleware(thunk))
    })

    afterEach(() => {
        jest.resetAllMocks()
    })

    it('test login action and update reducer', () => {
        mockedAxios.post.mockResolvedValueOnce({
            data: {
                result: { email: 'mockuser@email.com' },
                token: '123',
            },
        })
        store.dispatch(
            login({
                email: 'email',
                password: 'password',
            })
        )

        console.log(store.getState())
    })
})
