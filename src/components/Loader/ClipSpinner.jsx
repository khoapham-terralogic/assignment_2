import React from "react";
import PropTypes from 'prop-types'
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;

export const ClipSpinner = ({ css, size, color }) => {
    return (
        <div>
            <ClipLoader
                css={css}
                size={size}
                color={color}
            />
        </div>
    )
}

ClipSpinner.propTypes = {
    css: PropTypes.any,
    size: PropTypes.any.isRequired,
    color: PropTypes.string.isRequired
}