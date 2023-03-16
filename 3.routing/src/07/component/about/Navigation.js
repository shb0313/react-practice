import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../assets/scss/component/about/Navigation.scss';

const Navigation = () => {
    return (
        <nav className={styles.Navigation}>
            <NavLink href={'/about/me'}>Kickscar</NavLink>
            <span/>
            <NavLink href={'/about/location'}>Location</NavLink>
        </nav>
    );
};

export default Navigation;