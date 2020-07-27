import React, { useState } from 'react';
import PropTypes from 'prop-types'

const FormGroup = ({ type, label, labelName, frontSvg, rearSvg, rearSvgShow, ...rest }) => {
    const [isShow, setIsShow] = useState(false)
    const handleIsShow = () => { setIsShow(!isShow) }
    return (
        <div className="form-group">
            <label htmlFor={label}>{labelName}</label>
            <div className={`${label}-group`}>
                <img className="form-group-frontSvg" src={frontSvg} alt="" />
                <input
                    type={!isShow ? type : "text"}
                    className={`form-control ${label}-group`}
                    {...rest}
                />
                <img className="form-group-rearSvg" onClick={handleIsShow} src={!isShow ? rearSvg : rearSvgShow} alt="" />
            </div>
        </div>
    );
}

FormGroup.propTypes = {
    type: PropTypes.string.isRequired,
    frontSvg: PropTypes.any,
    rearSvg: PropTypes.any,
    label: PropTypes.string.isRequired,
    labelName: PropTypes.string.isRequired,
}

FormGroup.defaultProps = {
    type: "text",
}

export default FormGroup;
