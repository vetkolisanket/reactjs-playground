import React, { useState } from "react";
import "./styles.css";

const App = () => {
  return (
    <>
      <ContactCard />;
      <ContactCard />;
      <ContactCard />;
    </>
  );
};

const ContactCard = () => {
  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <img src="https://via.placeholder.com/150" alt="profile" />
      <div className="user-details">
        <p>Name: Jenny Han</p>
        <p>Email: Jenny.Han@notreal.com</p>
        {showAge && <p>Age: 25</p>}
      </div>
    </div>
  );
};

export default App;
