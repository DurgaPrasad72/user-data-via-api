import React, { useState, useEffect } from 'react';
import './Page.css';
//API link of page1

const url = 'https://reqres.in/api/users?page=1';

const Page1 = () => {
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
    <>
      <h1>
        <u>USERS OF PAGE 1 </u>
      </h1>
      <ul>
        {data.map(user => {
          //Destructuring the data of page 1  and assigning to user
          const { id, email, avatar, first_name, last_name } = user;
          return (
            <li key={id}>
              <img src={avatar} alt="avatar" />
              <div>
                <h4>First__Name:{first_name}</h4>
                <h4>Last__Name: {last_name}</h4>
                <h4>Email_id: {email}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Page1;
