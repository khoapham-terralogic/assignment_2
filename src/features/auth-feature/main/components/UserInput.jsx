import React from 'react';
import PropTypes from 'prop-types'

const UserFormGroup = ({ id, value, onChange, type, placeholder, rearSvg, handleShow }) => {
    return (
        <div className="form-group">
            <input
                className="form-control"
                type={type}
                id={id}
                value={value}
                onChange={onChange}
            />
            <div className="form-control__floating-label">{placeholder}</div>
            <img className="form-group-rearSvg" onClick={handleShow} src={rearSvg} alt="" />
        </div>
    );
}

UserFormGroup.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    rearSvg: PropTypes.any,

}

UserFormGroup.defaultProps = {
    type: ""
}

export default UserFormGroup;
