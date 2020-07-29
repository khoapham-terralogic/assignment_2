import React from 'react'
import { shallow } from 'enzyme'
import { ClipSpinner } from './ClipSpinner'

describe("<ClipSpinner />", () => {
    test("ClipSpinner rendered", () => {
        const component = shallow(<ClipSpinner size={15} color="#fff" />)
        expect(component).toMatchSnapshot();
    })
})
