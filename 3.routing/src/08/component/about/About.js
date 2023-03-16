import React from 'react';
import { Outlet } from 'react-router';
import SiteLayout from "../../layout/SiteLayout";
import styles from '../../assets/scss/component/about/Navigation.scss';

export default function About() {
    return (
        <SiteLayout>
            <nav className={styles.Navigation}>
                <a href={'/about/me'}>Kickscar</a>
                <span/>
                <a href={'/about/location'}>Location</a>
            </nav>
            <Outlet />
        </SiteLayout>
    );
}