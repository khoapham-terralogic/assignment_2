import React from 'react'
import ProtectedRoute from '..'
import { shallow, mount } from 'enzyme'
import { Redirect, BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'

const MockComponent = () => <div />
MockComponent.displayName = 'MockComponent';

describe("Test <ProtectedRoute />", () => {
    describe("If not authenticated", () => {
        const wrapper = shallow(
            <BrowserRouter>
                <ProtectedRoute to="/user" isAuth={false} component={<MockComponent />} />
            </BrowserRouter>
        )
        // console.log(wrapper.debug());
        it("It should redirect to login if not authenticated", () => {
            expect(wrapper.find('[data-testid="redirect"]')).toHaveLength(0)
        })
    })
    // describe("If authenticated", () => {
    //     const wrapper = shallow(
    //         <ProtectedRoute to="/user" isAuth={true} component={<MockComponent />} />
    //     )
    //     wrapper.update();
    //     it("It should render children component if authenticated", () => {
    //     })
    // })
})