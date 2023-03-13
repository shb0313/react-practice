import React, {useState, useEffect} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';
import data from './assets/json/data.json'

const App = () => {
  const [emails, setEmails] = useState(data);
  const notifyKeyWordChanged = function(keyword) {
    // keyword가 firstName or lastName or email
    const newEmails = emails.filter(function(e) {
        return
    });

  }

  return (
    <div id={'App'}>
      <RegisterForm />
      <SearchBar />
      <Emaillist emails={emails} />
    </div>
  )
}

export default App;