import React, { useState } from 'react';
import PropTypes from 'prop-types'
import validate from '../../../../helpers/validate';

const FormGroup = ({ type, label, labelName, handleShow, value, placeholder, onChange, frontSvg, rearSvg, rearSvgShow }) => {
    const [isValid, setIsValid] = useState(null)
    const [error, setError] = useState(null)
    const [isShow, setIsShow] = useState(false)
    const clearErr = () => { setError(null) }
    const handleIsShow = () => { setIsShow(!isShow) }
    const handleBlur = async (field, value) => {
        clearErr()
        try {
            const res = await validate({
                field, value
            })
            setIsValid(res.status)
        } catch (error) {
            setIsValid(false)
            setError(error.message)
        }
    }
    return (
        <div className="form-group">
            <label htmlFor={label}>{labelName}</label>
            <div className={`${label}-group`}>
                <img className="form-group-frontSvg" src={frontSvg} alt="" />
                <input
                    type={!isShow ? type : "text"}
                    className={isValid ? `form-control ${label}-group ${label}-group--valid` : `form-control ${label}-group ${label}-group--invalid`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={() => handleBlur(label, value)}
                />
                <img className="form-group-rearSvg" onClick={handleIsShow} src={!isShow ? rearSvg : rearSvgShow} alt="" />
                {error && <div className="errorMessage">{error}</div>}
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
    onChange: PropTypes.func,
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
