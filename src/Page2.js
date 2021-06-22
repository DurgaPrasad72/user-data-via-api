import React, { useState, useEffect } from 'react';
import './Page.css';
//Api call of page 2
const url = 'https://reqres.in/api/users?page=2'; //users url

const Page2 = () => {
  const [data, setData] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setData(users.data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <h1>
        <u>USERS OF PAGE 2</u>{' '}
      </h1>
      <ul className="users">
        {data.map(user => {
          //Destructuring  the  data
          const { id, email, avatar, first_name, last_name } = user;
          return (
            <li key={id}>
              <img src={avatar} alt="avatar" />
              <div>
                <h4>First_Name:{first_name}</h4>
                <h4>Last_Name:{last_name}</h4>
                <h4>Email_id:{email}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page2;
