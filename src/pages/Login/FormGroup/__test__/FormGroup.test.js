import React from 'react'
import FormGroup from '..'
import { shallow, mount } from 'enzyme'

const props = {
    type: "text",
    label: "email",
    labelName: "email",
    frontSvg: "../Images/frontSvg.svg",
    rearSvg: "../Images/rearSvg.svg",
    rearSvgShow: "../Images/rearSvgShow.svg",
}

describe("Test <FormGroup />", () => {
    describe("Should contain required props", () => {
        const wrapper = mount(<FormGroup {...props} />)
        it("It should contain required props", () => {
            expect(wrapper.prop('type')).toEqual("text")
            expect(wrapper.prop('label')).toEqual("email")
            expect(wrapper.prop('labelName')).toEqual("email")
            expect(wrapper).toMatchSnapshot()
        })
    })
    describe("State should change when click on rear image", () => {
        it("State change when click on rear image", () => {
            const changeState = jest.fn()
            const wrapper = shallow(<FormGroup onClick={changeState} {...props} />)
            const handleClick = jest.spyOn(React, 'useState')
            handleClick.mockImplementation(isShow => [isShow, changeState]);
            const img = wrapper.find("[data-testid='toggle-image']")
            img.simulate('click')
            expect(changeState).toBeTruthy()
        })
        it("Input type change when click on image", () => {
            const changeState = jest.fn()
            const wrapper = shallow(<FormGroup onClick={changeState} {...props} type="password" label="password" labelName="password" />)
            const handleClick = jest.spyOn(React, 'useState')
            handleClick.mockImplementation(isShow => [isShow, changeState]);
            const img = wrapper.find("[data-testid='toggle-image']")
            img.simulate('click')
            const input = wrapper.find('[data-testid="input"]')
            expect(input.props().type).toEqual("text")
        })
    })
})