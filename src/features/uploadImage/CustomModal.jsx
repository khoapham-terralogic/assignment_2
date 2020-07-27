import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import MyDropzone from './MyDropZone';
import store from '../../redux/store';
// import { uploadImage } from '../../redux/actions/userAction'
import { ClipSpinner } from '../../components'

const CustomModal = ({ isOpen, toggle, isLoading, uploadImage }) => {
    const [file, setFile] = useState(null)
    const callback = data => {
        setFile(data[0])
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        uploadImage({ file })
    }
    return (
        <Modal className="custom-modal" isOpen={isOpen} toggle={toggle}>
            <ModalHeader className="custom-modal__header" toggle={toggle}>
                <div className="custom-modal__header__title">
                    Upload image
                </div>
            </ModalHeader>
            <ModalBody className="custom-modal__body">
                <div className="custom-modal__body__container">
                    <MyDropzone parentCallback={callback} isActive={file} />
                    {isLoading ? <Button onClick={handleSubmit} disabled className="btn"><ClipSpinner color="#fff" size={20} /></Button> : <Button onClick={handleSubmit} className="btn">Upload</Button>}
                </div>
            </ModalBody>
        </Modal>
    );
}

export default CustomModal;
