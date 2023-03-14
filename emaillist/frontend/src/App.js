import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import SearchBar from "./SearchBar";
import Emaillist from "./Emaillist";
import "./assets/css/App.css";
import data from "./assets/json/data.json";

const App = () => {
  const [emails, setEmails] = useState(data);
  const notifyKeyWordChanged = function (keyword) {

    const notifyKeyWordChanged = function (keyword) {
      // keyword가 firstName or lastName or email
      const newEmails = data.filter(e =>
          e.firstName.indexOf(keyword) !== -1 ||
          e.lastName.indexOf(keyword) !== -1 ||
          e.email.indexOf(keyword) !== -1
      );
      setEmails(newEmails);
  };
  };

  return (
    <div id={"App"}>
      <RegisterForm />
      <SearchBar callback={notifyKeyWordChanged} />
      <Emaillist emails={emails} />
    </div>

  );
};

export default App;
