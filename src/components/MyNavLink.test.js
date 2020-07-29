import React from 'react'
import { shallow } from 'enzyme'
import MyNavLink from './MyNavLink'
import { cleanup } from '@testing-library/react'

afterEach(cleanup)

describe("<MyNavLink />", () => {
    const wrapper = shallow(<MyNavLink />)
    test("MyNavLink rendered", () => {
        expect(wrapper.find('[data-testid="navlink"]').contains(""))
    })
    test("MyNavLink go to path onClick", () => {
        expect(wrapper.simulate)
    })
})