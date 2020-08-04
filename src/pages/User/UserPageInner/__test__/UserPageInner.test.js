import React from 'react'
import UserPageInner from '..'
import { shallow } from 'enzyme'

describe('Test <UserPageInner />', () => {
    const props = {
        isAuth: false,
        logoutUser: jest.fn(),
        updateProfile: jest.fn(),
        userLoading: false,
        uploadImage: jest.fn(),
        avatarLink: "link-to-avatar.jpg",
        local_user: {
            name: "haha",
            email: "haha@mail.com",
            phone: "0123456789",
            avatar: "another-link-to-avatar.jpg"
        }
    }
    it("should render", () => {
        const wrapper = shallow(<UserPageInner {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
    it('should render loading component if isLoading is true', () => {
        const wrapper = shallow(<UserPageInner {...props} />)
        expect(wrapper.find(".loadingBackground")).toHaveLength(0)
        wrapper.setProps({ userLoading: true });
        expect(wrapper.find(".loadingBackground")).toHaveLength(1)
        expect(wrapper).toMatchSnapshot()
    });
    it('should open modal when onclick is called', () => {
        const changeState = jest.fn()
        const wrapper = shallow(<UserPageInner onClick={changeState} {...props} />)
        const handleClick = jest.spyOn(React, 'useState')
        handleClick.mockImplementation(isOpen => [isOpen, changeState]);
        wrapper.find('[data-testid="toggle-btn"]').simulate('click')
        expect(changeState).toBeTruthy()
    })
    it('should push to / if isAuth is false', () => {
        let useEffect
        const mockUseEffect = () => {
            useEffect.mockImplementationOnce(f => f());
        };
        beforeEach(() => {
            useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());
            mockUseEffect();
            mockUseEffect();
            const wrapper = shallow(<UserPageInner {...props} />);
            expect(wrapper.find(UserPageInner)).toHaveLength(0)
        });
    })
    it('should render default avatar if user avatar is null', () => {
        const wrapper = shallow(<UserPageInner {...props} />)
        expect(wrapper.find('.user__container__body__header-img').prop('src')).toEqual("http://api.terralogic.ngrok.io/another-link-to-avatar.jpg");
        wrapper.setProps({ local_user: { avatar: null } })
        expect(wrapper.find('.user__container__body__header-img').prop('src')).toEqual("avatar.png")
    });
    it('should push to / if isAuth is false', () => {
        let useEffect
        const mockUseEffect = () => {
            useEffect.mockImplementationOnce(f => f());
        };
        beforeEach(() => {
            useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());
            mockUseEffect();
            mockUseEffect();
            const wrapper = shallow(<UserPageInner {...props} />);
            expect(wrapper.find(UserPageInner)).toHaveLength(1)
            wrapper.setProps({ isAuth: false })
            expect(wrapper.find(UserPageInner)).toHaveLength(0)
        });
    })
})
