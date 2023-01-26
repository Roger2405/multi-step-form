import React, { useEffect } from 'react';
import { Link, Outlet, DataRouteMatch, matchPath, Pathname, createPath, useMatch } from 'react-router-dom';
import './styles.scss';
import BgMobile from '../../assets/images/bg-sidebar-mobile.svg';

import Advanced from '../../assets/images/icon-advanced.svg';

export default function NavBar() {
    return (
        <>
            <nav className='navBar'>

                <Link to={'/'} className={`navBar__link ${useMatch('/') ? 'active' : ''}`}>1</Link>
                <Link to={'/plans'} className={`navBar__link ${useMatch('/plans') ? 'active' : ''}`}>2</Link>
                <Link to={'/add-ons'} className={`navBar__link ${useMatch('/add-ons') ? 'active' : ''}`}>3</Link>
                <Link to={'/summary'} className={`navBar__link ${useMatch('/summary') ? 'active' : ''}`}>4</Link>
                <img className='background' src={BgMobile} />
            </nav>
            <Outlet />
        </>
    )
}