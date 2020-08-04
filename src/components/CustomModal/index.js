import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import { toast } from 'react-toastify';

import MyDropzone from '../MyDropZone';

const CustomModal = ({ isOpen, toggle, uploadImage, modalCallback }) => {
    const [file, setFile] = useState(null)
    const callback = data => {
        setFile(data[0])
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await uploadImage({ file })
        setFile(null)
        modalCallback(false)
    }
    useEffect(() => {
        if (file) {
            const fileType = file['type'];
            const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
            if (!validImageTypes.includes(fileType)) {
                // invalid file type code goes here.
                toast.error("Invalid file type")
                setFile(null)
            }
        }
    }, [file])
    return (
        <Modal centered className="custom-modal" isOpen={isOpen} toggle={toggle}>
            <ModalHeader className="custom-modal__header" toggle={toggle}>
                <div className="custom-modal__header__title">
                    Upload image
                </div>
            </ModalHeader>
            <ModalBody className="custom-modal__body">
                <div className="custom-modal__body__container">
                    <MyDropzone parentCallback={callback} isActive={file} />
                    {/* {file ? <>
                        {isLoading ? <Button onClick={handleSubmit} disabled className="btn"><ClipSpinner color="#fff" size={20} /></Button> : <Button onClick={handleSubmit} className="btn">Upload</Button>}
                    </> : null} */}
                    {file ? <Button onClick={handleSubmit} className="btn">Upload</Button> : null}

                </div>
            </ModalBody>
        </Modal>
    );
}

export default CustomModal;
