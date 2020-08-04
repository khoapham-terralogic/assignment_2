import React from 'react';
import { mount } from 'enzyme';
import AuthLayout from '../AuthLayout';
import { Router, MemoryRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import LoginPage from '../../pages/Login/LoginPageConnectWrapper';
const history = createBrowserHistory("/auth/login")
describe('Test <AuthLayout />', () => {
    it('should render', () => {
        const wrapper = mount(
            <Router history={history}>
                <AuthLayout />
            </Router>
        )
        expect(wrapper.find('[data-testid="logo-title"]').text()).toEqual("start your personal photo experience")
        expect(wrapper).toMatchSnapshot()
    });
    it('should render Login if path is /auth/login', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/auth/login']}>
                <AuthLayout />
            </MemoryRouter>
        );
        expect(wrapper.find(LoginPage)).toHaveLength(1)
    })
})
