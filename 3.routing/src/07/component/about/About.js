import React from 'react';
import { Outlet } from 'react-router';
import SiteLayout from "../../layout/SiteLayout";
import styles from '../../assets/scss/component/about/Navigation.scss';

export default function About() {
    return (
        <SiteLayout>
            <Navigation />
            <Outlet />
        </SiteLayout>
    );
}