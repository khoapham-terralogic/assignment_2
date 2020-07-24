import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types'

const UserFormGroup = ({ id, value, onChange, type, placeholder, rearSvg, handleShow, readonly }) => {
    const [isActive, setIsActive] = useState(false)
    const inputEl = useRef(null)
    const handleBlur = () => {
        if (value) setIsActive(true)
        else setIsActive(false)
    }
    useEffect(() => {
        if (value) setIsActive(true)
    }, [value])
    return (
        <div className={isActive ? "form-group form-group--active" : "form-group "}>
            <input
                ref={inputEl}
                className="form-control"
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                onFocus={() => setIsActive(true)}
                onBlur={handleBlur}
                readonly={readonly}
            />
            <div onClick={() => inputEl.current.focus()} className="form-control__floating-label">{placeholder}</div>
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
