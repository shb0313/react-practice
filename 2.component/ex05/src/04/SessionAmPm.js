import React from "react";
import styles from './assets/scss/SessionAmPm.scss';

export default function SessionAmPm({session}) {
    return (
        <div className={styles.AmPm}>
            <div>
                <p className={styles[session === 'am' ? 'on' : 'off']}>am</p>
            </div>
            <div>
                <p className={styles[session === 'pm' ? 'on' : 'off']}>pm</p>
            </div>
        </div>
    );
}