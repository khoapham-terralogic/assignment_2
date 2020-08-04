import React, { useCallback } from 'react';

import { useDropzone } from 'react-dropzone'

import { uploadSvg } from '../../constants'

const MyDropzone = ({ parentCallback, isActive }) => {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        parentCallback(acceptedFiles)
    }, [parentCallback])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div className={isActive ? "dropzone dropzone--active" : "dropzone dropzone--inactive"} {...getRootProps()}>
            <input {...getInputProps()} />
            <img className="dropzone__img" src={uploadSvg} alt="upload" />
            {isActive ?
                <p className="dropzone--active__p">Your file has been selected, choose another?</p> : <>
                    {
                        isDragActive ?
                            <p className="dropzone--inactive__p">Drop the files here ...</p> :
                            <p className="dropzone--inactive__p">Drag 'n' drop some files here, or click to select files</p>
                    }
                </>}
        </div>
    )
}

export default MyDropzone;
