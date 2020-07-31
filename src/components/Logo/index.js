import React from 'react';

import { logo } from '../../constants'
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <div className="logo" data-testid="logo">
            <NavLink to="/"><img className="logo-img" src={logo} alt="logo" /></NavLink>
            <p className="logo-title" data-testid="logo-title">start your personal photo experience</p>
        </div>
    );
}

export default Logo;
