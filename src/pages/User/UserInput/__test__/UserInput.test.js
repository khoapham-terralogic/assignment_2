import React from 'react'
import { shallow } from 'enzyme';
import UserInput from '..'


afterEach(() => {
    jest.resetAllMocks()
})
const defaultProps = {
    id: "name",
    value: "",
    type: "text",
    placeholder: "Full name",
    rearSvg: "../Images/rearSvg.svg",
    rearSvgShow: "../Images/rearSvgShow.svg"
}

// afterEach(cleanup)

describe('Test <UserInput />', () => {
    it('should render', () => {
        const wrapper = shallow(<UserInput {...defaultProps} />)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.form-control__floating-label').text()).toEqual("Full name")
    });
    it('should change isShow state if click on img', () => {
        const changeState = jest.fn()
        const wrapper = shallow(<UserInput onClick={changeState} {...defaultProps} />)
        const handleClick = jest.spyOn(React, 'useState')
        handleClick.mockImplementation(isShow => [isShow, changeState]);
        const img = wrapper.find(".form-group-rearSvg")
        img.simulate('click')
        wrapper.update()
        expect(wrapper.find(".form-group-rearSvg").props().src).toEqual("../Images/rearSvgShow.svg")
        // expect(wrapper.changeState).toBeTruthy()     
    });
    it('should change type if isShow state change', () => {
        const changeState = jest.fn()
        const wrapper = shallow(<UserInput onClick={changeState} {...defaultProps} />)
        const handleClick = jest.spyOn(React, 'useState')
        handleClick.mockImplementation(isShow => [isShow, changeState]);
        const img = wrapper.find(".form-group-rearSvg")
        img.simulate('click')
        wrapper.update()
        expect(wrapper.find(".form-control").props().type).toEqual("text")
        // expect(wrapper.changeState).toBeTruthy()     
    });
    it('should change isActive state if input is focused', () => {
        const changeState = jest.fn()
        const wrapper = shallow(<UserInput onClick={changeState} {...defaultProps} />)
        const handleClick = jest.spyOn(React, 'useState')
        handleClick.mockImplementation(isActive => [isActive, changeState]);
        const input = wrapper.find(".form-control")
        input.simulate("focus")
        expect(changeState).toBeTruthy()
    })
    it('should change isActive state if input have value', () => {
        const changeState = jest.fn()
        const mockProps = {
            id: "name",
            value: "hihi",
            type: "text",
            placeholder: "Full name",
            rearSvg: "../Images/rearSvg.svg",
            rearSvgShow: "../Images/rearSvgShow.svg"
        }
        let useEffect
        const mockUseEffect = () => {
            useEffect.mockImplementationOnce(f => f());
        };
        beforeEach(() => {
            useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());
            mockUseEffect();
            mockUseEffect();
            const wrapper = shallow(<UserInput isActive={false} onClick={changeState}  {...mockProps} />)
            expect(wrapper.props().isActive).toBeTruthy()
        });
    })
    // it('onclick should be called on focus', () => {
    //     const changeState = jest.fn()
    //     const onClick = jest.fn()
    //     // const handleOnClick = jest.spyOn(onClick, 'onClick')
    //     const wrapper = shallow(<UserInput {...defaultProps} />)
    //     // const handleClick = jest.spyOn(React, 'useState')
    //     const input = wrapper.find(".form-control__floating-label")
    //     // handleClick.mockImplementation(isActive => [isActive, changeState]);
    //     input.simulate('click')
    //     expect(changeState).toBeTruthy()
    // })
})