import React, { useState } from "react";
import "./styles.css";

const App = () => { 
  return(
    <div>
    <ContactCard/>
    <ContactCard/>
    <ContactCard/>
    <Card/>
  </div>
    
);
}

const ContactCard = () => {
  // 1st variable access the state value, 2nd enables changes.
  const [showAge, setShowAge] = useState(true);
  

  return (
    <div className="contact-card">
      <img src="https://via.placeholder.com/150" alt="profile" />
      <div className="user-details">
        <p>Name: Jenny Han</p>
        <p>Email: Jenny.Han@notreal.com</p>
        <button onClick={() => setShowAge(!showAge)}>
	Toggle Age 
</button>
        {showAge === true ? <p>Age: 25</p> : null}
      </div>
    </div>
  );
};

 const Card=()=>{
   return(
     <div>
       <h2> Tasty burger</h2>
       {/* <img>https://source.unsplash.com/400x300/?burger</img> */}
       <p>It's good burger</p>
     </div>

   );
 }
 




export default App;
