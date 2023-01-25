import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './styles.scss';
// import BgMobile from '../../assets/images/bg-slidebar-mobile.svg';

export default function NavBar() {


    return (
        <>
            <nav className='navBar'>
                <Link to={'/'} className='navBar__link active'>1</Link>
                <Link to={'plans'} className='navBar__link'>2</Link>
                <Link to={'add-ons'} className='navBar__link'>3</Link>
                <Link to={'summary'} className='navBar__link'>4</Link>
                <div className='fakeBg'></div>
            </nav>
            <Outlet />
        </>
    )
}