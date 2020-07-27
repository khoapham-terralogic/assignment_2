import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types'

const UserFormGroup = ({ id, value, defaultValue, type, placeholder, rearSvg, readonly, rearSvgShow, ...rest }) => {
    const [isActive, setIsActive] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const handleShow = () => { setIsShow(!isShow) }
    const inputEl = useRef(null)
    const handleBlur = () => {
        if (value || defaultValue) setIsActive(true)
        else setIsActive(false)
    }
    useEffect(() => {
        if (value || defaultValue) setIsActive(true)
    }, [value, defaultValue])
    return (
        <div className={isActive ? "form-group form-group--active" : "form-group "}>
            <input
                ref={inputEl}
                className="form-control"
                type={!isShow ? type : 'text'}
                id={id}
                defaultValue={defaultValue}
                onFocus={() => setIsActive(true)}
                onBlur={handleBlur}
                {...rest}
            />
            <div onClick={() => inputEl.current.focus()} className="form-control__floating-label">{placeholder}</div>
            <img className="form-group-rearSvg" onClick={handleShow} src={!isShow ? rearSvg : rearSvgShow} alt="" />
        </div>
    );
}

UserFormGroup.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    placeholder: PropTypes.string,
    rearSvg: PropTypes.any,

}

UserFormGroup.defaultProps = {
    type: ""
}

export default UserFormGroup;
