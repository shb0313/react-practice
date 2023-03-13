import React, { useState } from 'react';
import './assets/css/App.css';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';


function App(props) {

    const [emails, setEmails] = useState(data);
    const notifyKeywordChanged = function() {

        // keyword가 firstName or lastName or email
        const newEmails = emails.filter(function(e) {
            return true;
        })
    }

    return (
        <div id='App'>
            <RegisterForm />
            <Searchbar />
            <Emaillist />
        </div>
    );
}

export default App;