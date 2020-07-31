import React from 'react'
import NotFoundLayout from '../NotFoundLayout'
import { shallow } from 'enzyme';

describe('Test <NotFoundLayout />', () => {
    it('should render', () => {
        const wrapper = shallow(<NotFoundLayout />)
        expect(wrapper).toMatchSnapshot()
    });

})
