import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import { Form } from 'reactstrap'
import MyDropzone from './MyDropZone';
import store from '../../redux/store';
import { uploadImage } from '../../redux/actions/userAction'

const CustomModal = ({ isOpen, toggle }) => {
    const [file, setFile] = useState(null)
    const [isActive, setIsActive] = useState(false)
    const callback = data => {
        setFile(data[0])
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        store.dispatch(uploadImage({ file }))
    }
    return (
        <Modal className="custom-modal" isOpen={isOpen} toggle={toggle}>
            <ModalHeader className="custom-modal__header" toggle={toggle}>
                <div className="custom-modal__header__title">
                    Upload image
                </div>
            </ModalHeader>
            <ModalBody className="custom-modal__body">
                <Form onSubmit={handleSubmit}>
                    <MyDropzone parentCallback={callback} isActive={file} />
                    <Button className="btn">Upload</Button>
                </Form>
            </ModalBody>
        </Modal>
    );
}

export default CustomModal;
