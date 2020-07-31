import React from 'react'
import CustomModal from '../CustomModal'
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
    it('should render button if file is not empty', () => {
        const wrapper = shallow(<CustomModal {...props} />)
        const instance = wrapper.instance()
        instance.setState('file', 'somefile')
        expect(wrapper.find('.btn')).toHaveLength(1)
    })
    it('should call submit if button is click', () => {
        const wrapper = mount(<CustomModal {...props} />)
        wrapper.instance().setFile("somefile")
        console.log(wrapper.debug())
        // expect(handleSubmit).toHaveBeenCalled()
    })
})
