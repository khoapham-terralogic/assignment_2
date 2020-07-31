import React from 'react'
import { shallow, mount } from 'enzyme'
import LoginForm, { LoginInnerForm } from '..'
import { BrowserRouter as Router } from 'react-router-dom'
import wait from "waait";
const mockData = {
    email: "",
    password: ""
}

const props = {
    values: mockData,
    touched: false,
    errors: {},
    handleChange: jest.fn(),
    handleBlur: jest.fn(),
    handleSubmit: jest.fn(),
}

let ui;

describe('<LoginForm />', () => {
    it("should render", () => {
        // beforeEach(() => {
        // })
        ui = mount(
            <Router>
                <LoginForm />
            </Router>
        )
        const emailField = ui.find('[data-testid="email-input"]').first();
        emailField.simulate("change", {
            event: {
                target: {
                    name: "email",
                    value: "foo"
                }
            }
        });
        emailField.simulate("blur");
        ui.update();
        console.log(emailField.debug());
    })
    it("The error is displayed", async () => {
        await wait(0);
        ui.update();
        // console.log(ui.debug());
        const errors = ui.find(".errorMessage");
        expect(errors.length).toBeGreaterThan(0);
    });
})


// describe("Test <MyForm />", () => {
//     const handleSubmit = jest.fn()
//     const wrapper = shallow(<MyForm handleSubmit={handleSubmit} {...props} values={mockData} />)
//     it("It should render with empty value", () => {
//         expect(wrapper).toMatchSnapshot()
//     })
//     it("Submit should be called on click", () => {
//         const form = wrapper.find("form");
//         console.log(form.debug());
//         form.simulate('submit')
//         expect(handleSubmit).toHaveBeenCalled()
//     })
// })

// describe("Test <LoginForm />", () => {
//     const wrapper = shallow(<MyForm {...props} values={mockData} />)
//     it("It should render", () => {
//         expect(wrapper).toMatchSnapshot()
//     })
//     describe("Test value change", () => {
//         const handleSubmit = jest.fn()
//         const wrapper = shallow(<LoginForm onSubmit={handleSubmit} />)
//         it("Submit the form", () => {
//             const btn = wrapper.find("button")
//             console.log(btn.debug());
//             btn.simulate("click")
//             expect(handleSubmit).toHaveBeenCalled()
//         })
//     })
// })