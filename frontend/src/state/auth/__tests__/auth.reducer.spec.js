import reducer from '../auth.reducer'

describe('test auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            loading: false,
            currentUser: {},
            token: '',
            error: null,
        })
    })

    it('should handle LOGIN_SUCCESS', () => {
        const state = undefined
        const action = {
            type: 'LOGIN_SUCCESS',
            data: {
                result: { userid: '123', email: 'test' },
                token: '123123',
            },
        }
        const expectedResult = {
            currentUser: { userid: '123', email: 'test' },
            token: '123123',
            error: null,
            loading: false,
        }
        expect(reducer(state, action)).toEqual(expectedResult)
    })
})
