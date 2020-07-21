import React, { useState } from 'react';
import PropTypes from 'prop-types'
import validate from '../../../../helpers/validate';

const FormGroup = ({ type, label, labelName, handleShow, value, placeholder, onChange, frontSvg, rearSvg }) => {
    const [isValid, setIsValid] = useState(null)
    const [error, setError] = useState(null)
    const handleBlur = async (field, value) => {
        try {
            const res = await validate({
                type: "register",
                field, value
            })
            setIsValid(res.status)
        } catch (error) {
            setIsValid(false)
            setError(error.errorMessage)
        }
    }
    return (
        <div className="form-group">
            <label htmlFor={label}>{labelName}</label>
            <div className={`${label}-group`}>
                <img className="form-group-frontSvg" src={frontSvg} alt="" />
                <input
                    type={type}
                    className={isValid ? `form-control ${label}-group ${label}-group--valid` : `form-control ${label}-group ${label}-group--invalid`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={() => handleBlur(label, value)}
                />
                <img className="form-group-rearSvg" onClick={handleShow} src={rearSvg} alt="" />
            </div>
        </div>
    );
}

FormGroup.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    value: PropTypes.any,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    frontSvg: PropTypes.any,
    rearSvg: PropTypes.any,
    label: PropTypes.string.isRequired,
    labelName: PropTypes.string.isRequired,
    handleShow: PropTypes.func
}

FormGroup.defaultProps = {
    type: "text",
}

export default FormGroup;
