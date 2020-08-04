import React from 'react'
import { shallow } from 'enzyme';
import RegisterPageInner from '..';

afterEach(() => {
    jest.resetAllMocks()
})

describe('Test <RegisterPageInner />', () => {
    const props = {
        registerUser: jest.fn(),
        isLoading: false,
        isAuth: false,
        msg: "",
    }
    const wrapper = shallow(<RegisterPageInner {...props} />)
    it('should render', () => {
        expect(wrapper).toMatchSnapshot()
    });
    it('should render loading component if isLoading is true', () => {
        expect(wrapper.find(".loadingBackground")).toHaveLength(0)
        wrapper.setProps({ isLoading: true })
        expect(wrapper.find(".loadingBackground")).toHaveLength(1)
        expect(wrapper.find(".loadingBackground")).toMatchSnapshot()
    });
    it('should redirect /user loading component if isAuth is true', () => {
        let useEffect
        const mockUseEffect = () => {
            useEffect.mockImplementationOnce(f => f());
        };
        beforeEach(() => {
            useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());
            mockUseEffect();
            mockUseEffect();
            expect(wrapper.find(RegisterPageInner)).toHaveLength(1)
            wrapper.setProps({ isAuth: true })
            expect(wrapper.find(RegisterPageInner)).toHaveLength(0)
        });
    });
})
