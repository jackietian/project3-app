import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../../state/reducers'
import Login from '../Login'

describe('Test <Login />', () => {
    let store, wrapper
    beforeEach(() => {
        store = createStore(reducers)
        wrapper = mount(
            <Provider store={store}>
                <Login />
            </Provider>
        )
    })

    it('test login component content', () => {
        expect(wrapper.find('label').at(0).text()).toEqual('Email')
        expect(wrapper.find('label').at(1).text()).toEqual('Password')
        expect(wrapper.find('button').at(0).text()).toEqual('cancel')
        expect(wrapper.find('button').at(1).text()).toEqual('Submit')
    })
})
