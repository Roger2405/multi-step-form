import React, { useEffect } from 'react';
import { Link, Outlet, DataRouteMatch, matchPath, Pathname, createPath, useMatch } from 'react-router-dom';
import './styles.scss';
import BgMobile from '../../assets/images/bg-sidebar-mobile.svg';
import BgDesktop from '../../assets/images/bg-sidebar-desktop.svg';

import Advanced from '../../assets/images/icon-advanced.svg';

export default function NavBar() {
    return (
        <>
            <nav className='navBar'>
                <Link id='index' to={'/'} className={`navBar__link ${useMatch('/') ? 'active' : ''}`}>
                    <span>1</span>
                    <div>
                        <p>Step 1</p>
                        <label htmlFor="index">Your Info</label>
                    </div>
                </Link>
                <Link id='plans' to={'/plans'} className={`navBar__link ${useMatch('/plans') ? 'active' : ''}`}>
                    <span>2</span>
                    <div>
                        <p>Step 2</p>
                        <label htmlFor="plans">Select Plan</label>
                    </div>
                </Link>
                <Link id='add-ons' to={'/add-ons'} className={`navBar__link ${useMatch('/add-ons') ? 'active' : ''}`}>
                    <span>3</span>
                    <div>
                        <p>Step 3</p>
                        <label htmlFor="add-ons">Add-Ons</label>
                    </div>
                </Link>
                <Link id='summary' to={'/summary'} className={`navBar__link ${useMatch('/summary') ? 'active' : ''}`}>
                    <span>4</span>
                    <div>
                        <p>Step 4</p>
                        <label htmlFor="summary">Summary</label>
                    </div>
                </Link>
                {/* <label className='navBar__label' htmlFor="summary"> Summary</label> */}


            </nav>
            <Outlet />
        </>
    )
}

/*
<picture className='background'>
                    <source media="(min-width: 1440px)" srcSet={BgDesktop} />
                    {/* <source media="(max-width: 1439px)" srcSet={BgMobile} /> 
<img src={BgMobile} alt="Chris standing up holding his daughter Elva" />
                </picture >
*/