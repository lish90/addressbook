import React, { useState, useEffect } from "react";
import "./styles.css";
// import"./component/card"



const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then(response => response.json())
      .then(data => {
        setContacts(data.results);
      });
  }, []);

  return (
    <>
      {contacts.map(contact => (
        <ContactCard
          avatar={contact.picture.large}
          name={contact.name.first + " " + contact.name.last}
          email={contact.email}
          age={contact.dob.age}
        />
      ))}
      {/* <card/> */}
    </>
  );
  
  // return(
  //   <>
  //     <Card>
       
  //     </Card>
  //   </>
  // )





};

const ContactCard = props => {
  const [showAge, setShowAge] = useState(false);
  
  return (
    <div className="contact-card">
      <img src={props.avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={() => setShowAge(!showAge)}>Toggle Age</button>
        {showAge && <p>Age: {props.age}</p>}
      </div>
    </div>
  );
};





  // const contacts = [
  //   { name: "Jenny Han", email: "jenny.han@notreal.com", age: 25, star_sign:"Traus"},
  //   { name: "Jason Long", email: "jason.long@notreal.com", age: 45, star_sign:"Traus"},
  //   { name: "Peter Pan", email: "peter.pan@neverland.com", age: 100, star_sign:"pear" },
  //   { name: "Amy McDonald", email: "amy@email.com", age: 33, star_sign:"cancner" }
  // ];
  
    // <>
    //   <ContactCard
    //     avatar="https://via.placeholder.com/150"
    //     name="Jenny Han"
    //     email="jenny.han@notreal.com"
    //     age={25}
    //   />
    //   <ContactCard
    //     avatar="https://via.placeholder.com/150"
    //     name="Jason Long"
    //     email="jason.long@notreal.com"
    //     age={45}
    //   />
    //   <ContactCard
    //     avatar="https://via.placeholder.com/150"
    //     name="Peter Pan"
    //     email="peter.pan@neverland.com"
    //     age={100}
    //   />
    // </>
//   );
// };

//  const Card=()=>{
//    return(
//      <div>
//        <h2> Tasty burger</h2>
//        {/* <img>https://source.unsplash.com/400x300/?burger</img> */}
//        <p>It's good burger</p>
//      </div>

//    );
//  }
 

export default App;
