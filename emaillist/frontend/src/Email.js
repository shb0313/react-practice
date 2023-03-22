import React from 'react';
import styles from './assets/css/Email.scss';

const Email = ({no, firstName, lastName, email}) => {

    const deleteEmail = async (no) => {
        
        try {
            const response = await fetch('/api/delete', {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({no: no})
            });

            console.log(no);


            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`)
            }

        } catch(err) {
            console.log(err.message);
        } 
    }

    return (
        <li className={styles.Email}>
            {firstName}{lastName}
            <br/>
            {email}
            <a href='' onClick={e => deleteEmail(no)} />
        </li>
    );
};

export default Email;