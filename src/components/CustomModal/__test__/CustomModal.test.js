import React from 'react'
import CustomModal from '..'
import { shallow, mount } from 'enzyme';
// import MyDropZone from '../MyDropZone'

describe('Test <CustomModal />', () => {
    let props = {
        isOpen: false,
        toggle: jest.fn(),
        uploadImage: jest.fn(),
        modalCallback: jest.fn()
    }
    // const file = new File([''], 'filename.txt', {
    //     type: 'text/plain',
    //     lastModified: new Date()
    // })
    const wrapper = shallow(<CustomModal {...props} />)
    it('should render', () => {
        expect(wrapper).toMatchSnapshot()
    });
    it('set file should be called when click upload', () => {
        // const changeState = jest.fn()
        // const wrapper = shallow(<CustomModal onClick={changeState} {...props} />)
        // const handleClick = jest.spyOn(React, 'useState')
        // handleClick.mockImplementation(file => [file, changeState]);
        // wrapper.find('.btn').simulate('click')
        // expect(changeState).toBeTruthy()

    })
    it('should not render button if file is empty', () => {
        // const file = new File([''], 'filename.txt', {
        //     type: 'text/plain',
        //     lastModified: new Date()
        // })
        let useEffect
        const mockUseEffect = () => {
            useEffect.mockImplementationOnce(f => f());
        };
        beforeEach(() => {
            useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());
            mockUseEffect();
            mockUseEffect();
            const wrapper = shallow(<CustomModal {...props} />);
            expect(wrapper.find(".btn")).toHaveLength(0)
        });
    })
    // it('should call submit if button is click', () => {
    //     const wrapper = mount(<CustomModal {...props} />)
    //     wrapper.instance().setFile("somefile")
    //     console.log(wrapper.debug())
    //     // expect(handleSubmit).toHaveBeenCalled()
    // })
    it('should render button if file is not empty', () => {

        let useEffect
        const mockUseEffect = () => {
            useEffect.mockImplementationOnce(f => f());
        };
        beforeEach(() => {
            useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());
            const stateSetter = jest.fn()
            jest.spyOn(React, 'useState')
                //Simulate that mode state value was set to 'new mode value'
                .mockImplementation(stateValue => [stateValue = {}, stateSetter])
            mockUseEffect();
            mockUseEffect();
            const wrapper = shallow(<CustomModal {...props} />);
            expect(wrapper.find(".btn")).toHaveLength(1)
        });
        // expect(wrapper.props()).toBe({})
    })
})
