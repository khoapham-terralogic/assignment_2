import React from 'react';
import PropTypes from 'prop-types'

const FormGroup = ({ type, label, labelName, handleShow, isShow, className, value, placeholder, onChange, frontSvg, rearSvg }) => {
    return (
        <div className="form-group">
            <label htmlFor={label}>{labelName}</label>
            <div className={`${label}-group`}>
                <img className="form-group-frontSvg" src={frontSvg} alt="" />
                <input type={type}
                    className={`form-control ${label}-group`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
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
