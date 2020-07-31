import React from 'react'
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store' //ES6 modules

import AuthLayout from './layouts/AuthLayout';
import NotFoundLayout from './layouts/NotFoundLayout';
import App from './App';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
const middlewares = []
const mockStore = configureStore(middlewares)
describe('Test <App />', () => {
    let store
    it('should redirect to 404 if path is invalid', () => {
        beforeEach(() => {
            store = mockStore({
                isAuth: false,
            });
            const wrapper = mount(
                <Provider store={store}>
                    <MemoryRouter initialEntries={['/random']}>
                        <App />
                    </MemoryRouter>
                </Provider>
            );
            expect(wrapper.find(AuthLayout)).toHaveLength(0);
            expect(wrapper.find(NotFoundLayout)).toHaveLength(1);
        });
    });
})
