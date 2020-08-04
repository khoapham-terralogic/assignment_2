import React from 'react'
import { shallow } from 'enzyme'
import RegisterForm from '..'
// const mockData = {
//     email: "",
//     password: ""
// }

// const props = {
//     values: mockData,
//     touched: false,
//     errors: {},
//     handleChange: jest.fn(),
//     handleBlur: jest.fn(),
//     handleSubmit: jest.fn(),
// }

let ui;

describe('<RegisterForm />', () => {
    it("", () => {
        beforeEach(() => {
            ui = shallow(<RegisterForm />)
            console.log(ui);
        })
    })
})