import React from 'react'
import Logo from './Logo'

import { shallow } from 'enzyme'
import { cleanup } from '@testing-library/react'

afterEach(cleanup)

describe("<Logo />", () => {
    const wrapper = shallow(<Logo />)
    test("Logo rendered", () => {
        expect(wrapper.find('[data-testid="logo"]').text()).toEqual("start your personal photo experience")
    })
})