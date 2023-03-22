import React, { useState } from 'react';
import styles from './assets/css/RegisterForm.css';

const RegisterForm = (callback) => {

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');

    const changeFirstName = e => {
        setFirstName(e);
    };

    const changeLastName = e => {
        setLastName(e);
    };

    const changeEmail = e => {
        setEmail(e);
    };

    const addEmail = async (firstName, lastName, email) => {
        const newEmail = {
            no: null,
            firstName: firstName,
            lastName: lastName,
            email: email
        };

        try {
            const response = await fetch('/api/add', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newEmail)
            });

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
        <form className={styles.RegisterForm}>
              <input type='text' name='firstName' placeholder='성' className={styles.InputFirstName} value={firstName} onChange={e => changeFirstName(e.target.value)} />
              <input type='text' name='lastName' placeholder='이름' className={styles.InputLastName} value={lastName} onChange={e => changeLastName(e.target.value)} />
              <input type='text' name='email' placeholder='이메일' className={styles.InputEmail} value={email} onChange={e => changeEmail(e.target.value)} />
              <input type='submit' value='등록' onClick={e => addEmail(firstName, lastName, email)} />
        </form>
    );
};

export default RegisterForm;
