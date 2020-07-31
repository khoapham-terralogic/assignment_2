import React from 'react';
import { shallow } from 'enzyme';
import MyNavLink from '..'

const props = {
    lable: "Register",
    toPath: "/auth/register",
    onClick: jest.fn()
}

describe("Test <MyNavLink1 />", () => {
    const wrapper = shallow(<MyNavLink {...props} />)
    it("It should render", () => {
        expect(wrapper).toMatchSnapshot()
    })
    it("It should contain props", () => {
        expect(wrapper.find(".nav-item").text()).toBe("Register");
        expect(wrapper.prop('to')).toEqual("/auth/register");
    })
})