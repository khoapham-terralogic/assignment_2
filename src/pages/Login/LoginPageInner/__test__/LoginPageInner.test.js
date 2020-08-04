import React from 'react'
import { shallow } from 'enzyme'
import LoginPageInner from '..';

describe('Test <LoginPageInner />', () => {
    const props = {
        isAuth: false,
        isLoading: false,
        loginUser: jest.fn()
    }
    const wrapper = shallow(<LoginPageInner {...props} />)
    it('should render', () => {
        expect(wrapper).toMatchSnapshot()
    });
    it('should render with required props', () => {
        expect(wrapper.prop('isAuth')).toBeFalsy()
        expect(wrapper.prop('isLoading')).toBeFalsy()
        expect(wrapper).toMatchSnapshot()
    });
    it('should render loading if isLoading is true', () => {
        const wrap = shallow(<LoginPageInner isLoading={true} isAuth={false} loginUser={jest.fn()} />)
        wrapper.update()
        expect(wrap.find('.loadingBackground')).toHaveLength(1)
    });
    it('should push to /user if isAuth is true', () => {
        let useEffect
        const mockUseEffect = () => {
            useEffect.mockImplementationOnce(f => f());
        };
        beforeEach(() => {
            const wrapper = shallow(<LoginPageInner isLoading={false} isAuth={true} loginUser={jest.fn()} />);
            useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());
            mockUseEffect();
            mockUseEffect();
            expect(wrapper.find(LoginPageInner)).toHaveLength(0)
        });
    })
})
