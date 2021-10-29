import * as actions from '../auth.action'

describe('auth actions', () => {
    it('should create an action to login', () => {
        const expectedAction = {
            type: 'LOGIN_SUCCESS',
            data: 123,
        }
        expect(actions.loginSuccess(123)).toEqual(expectedAction)
    })
})
