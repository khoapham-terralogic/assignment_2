import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;

export const ClipSpinner = ({ css, size }) => {
    return (
        <div>
            <ClipLoader
                css={css}
                size={size}
                color={"#4d0c5a"}
            />
        </div>
    )
}
