import React from 'react'
import { shallow } from 'enzyme';
import MyDropzone from '../MyDropZone';

describe('Test <MyDropzone />', () => {
    let props = {
        parentCallback: jest.fn(),
        isActive: false
    }
    it('should render', () => {
        const wrapper = shallow(<MyDropzone {...props} />)
        expect(wrapper).toMatchSnapshot()
    });
    it('should render correspondingly to isActive props', () => {
        const wrapper = shallow(<MyDropzone {...props} />)
        wrapper.setProps({ isActive: true })
        expect(wrapper.find(".dropzone--active__p").text()).toEqual("Your file has been selected, choose another?")
    })
    it('should render correspondingly to isDragActive props', () => {
        const wrapper = shallow(<MyDropzone isDragActive={false} {...props} />)
        wrapper.setProps({ isDragActive: true })
        expect(wrapper.find('.dropzone--inactive__p').text()).toEqual("Drag 'n' drop some files here, or click to select files")
    })
})
