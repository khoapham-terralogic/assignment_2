import React from 'react'
import ProtectedRoute from '..'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'


const MockComponent = () => <div />
MockComponent.displayName = 'MockComponent';

describe("Test <ProtectedRoute />", () => {
    describe("If not authenticated", () => {
        // console.log(wrapper.debug());
        it("It should redirect to login if not authenticated", () => {
            const wrapper = mount(
                <MemoryRouter initialEntries={['/']}>
                    <ProtectedRoute path="/test" exact isAuth={false} component={MockComponent} />
                </MemoryRouter>
            )
            // expect(wrapper.find('[data-testid="redirect"]')).pathHaveLength(0)
            expect(wrapper.find(MockComponent)).toHaveLength(0)

        })
        it("It should render component if authenticated", () => {
            const wrapper = mount(
                <MemoryRouter initialEntries={['/']}>
                    <ProtectedRoute path="/test" exact isAuth={true} component={MockComponent} />
                </MemoryRouter>
            )
            console.log(wrapper.find('Route').prop('render'))

            // expect(wrapper.find('[data-testid="redirect"]')).toHaveLength(0)
            expect(wrapper.find(MockComponent)).toHaveLength(1)

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