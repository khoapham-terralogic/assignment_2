import React from 'react'
import { shallow } from 'enzyme'
import { ClipSpinner } from '..'

const props = {
    css: "",
    size: 15,
    color: "#fff"
}

describe("<ClipSpinner />", () => {
    test("It should render a default white spinner with a size of 15", () => {
        const wrapper = shallow(<ClipSpinner {...props} />)
        expect(wrapper).toMatchSnapshot();
    })
})
