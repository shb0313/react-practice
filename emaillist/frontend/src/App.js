import React, { useState, useEffect } from 'react';
import './assets/css/App.css'
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';

function App() {
    const [emails, setEmails] = useState([]);

    const notifyKeyWordChanged = function (keyword) {
        
        // keyword가 firstName or lastName or email
        const newEmails = emails.filter(e =>
            e.firstName.indexOf(keyword) !== -1 ||
            e.lastName.indexOf(keyword) !== -1 ||
            e.email.indexOf(keyword) !== -1
        );
        setEmails(newEmails);
    };

    const fetchEmails = async () => {
        try {
            const response = await fetch('/api/emaillist', {
                method: 'get',
                headers: {
                    'Accept': 'application/json'
                }
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`)
            }

            setEmails(json.data);
        } catch(err) {
            console.log(err.message);
        }
    }
    
    useEffect(()=>{
        fetchEmails();
    }, []);

    return (
        <div id='App' className='App'>
            <RegisterForm />
            <Searchbar callback={notifyKeyWordChanged} />
            <Emaillist emails={emails} />
        </div>
    );
};

export default App;