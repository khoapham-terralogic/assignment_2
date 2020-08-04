import React from 'react'
import { UserInnerForm } from '..'
import { shallow } from 'enzyme'


describe('Test <UserForm/>', () => {
    const values = {
        fullName: "asd",
        email: "asd@asd.com",
        phoneNumber: "0123456789",
        currentPassword: "123456789@Ab",
        newPassword: "123456789@Aa",
        confirmPassword: "123456789@Aa"
    }
    const props = {
        values,
        touched: false,
        errors: {},
        handleChange: jest.fn(),
        handleBlur: jest.fn(),
        handleSubmit: jest.fn()
    }
    describe('<UserInnerForm />', () => {
        it("should render", () => {
            const wrapper = shallow(<UserInnerForm {...props} />)
            expect(wrapper).toMatchSnapshot()
        })
    })
    // describe('<UserForm />', () => {


    //     it("should render", () => {
    //         const wrapper = shallow(<UserForm {...props} />)
    //         console.log(wrapper.debug());
    //     })
    // })

})
