import React from 'react'
import UserLayout from '../UserLayout'
import { shallow } from 'enzyme';

describe('Test <UserLayout />', () => {
    it('should render', () => {
        const wrapper = shallow(<UserLayout />)
        expect(wrapper).toMatchSnapshot()
    });
    it('should render correctly', () => {
        const wrapper = shallow(<UserLayout />)
        expect(wrapper.find(".user__container__header__title").text()).toEqual("My Profile")
        expect(wrapper).toMatchSnapshot()
    });
})
