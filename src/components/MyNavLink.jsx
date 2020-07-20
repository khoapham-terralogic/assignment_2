import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

const MyNavLink = ({ lable, toPath, onClick }) => {
    return (
        <NavLink
            to={toPath}
            onClick={onClick}
            className="nav-link nav-link-custom"
        >
            <div className="nav-item">{lable}</div>
        </NavLink>
    );
}

MyNavLink.propTypes = {
    lable: PropTypes.string.isRequired,
    className: PropTypes.string,
    toPath: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

MyNavLink.defaultProps = {
    lable: "",
    className: "",
    toPath: "/"
}

export default MyNavLink;
