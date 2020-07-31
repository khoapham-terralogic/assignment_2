
import React from 'react';
import Logo from '..'
import { shallow } from 'enzyme';

describe('<Logo />', () => {
    const wrapper = shallow(<Logo />)
    it('It should render', () => {
        expect(wrapper).toMatchSnapshot()
    })
    it('It should render properly', () => {
        expect(wrapper.find('[data-testid="logo-title"]').text()).toEqual("start your personal photo experience")
    })
});
