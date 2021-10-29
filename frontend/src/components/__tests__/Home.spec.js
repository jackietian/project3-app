import { shallow } from 'enzyme'
import Home from '../Home.js'

describe('Test <Home />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Home />)
    })

    it('test home content', () => {
        expect(wrapper.text()).toEqual('Home')
    })
})
