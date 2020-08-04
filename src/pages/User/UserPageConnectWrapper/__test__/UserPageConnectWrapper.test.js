import React from 'react'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import UserPage from '..';

const mockStore = configureStore([]);

describe('Test <UserPage />', () => {
    let component;
    let store
    const history = createMemoryHistory('/')
    // let props = {
    //     registerUser: jest.fn(),
    //     isLoading: false,
    //     isAuth: false,
    //     msg: ""
    // }

    beforeEach(() => {
        store = mockStore({
            auth: {
                isAuth: true,
            },
            user: {
                userLoading: false
            }
        });
        component = renderer.create(
            <Provider store={store}>
                <Router history={history}>
                    <UserPage />
                </Router>
            </Provider>
        );
    });

    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();

    });
});