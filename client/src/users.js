//  video on react router       https://www.youtube.com/watch?v=Law7wfdg_ls

import React, { useState, useEffect } from 'react';
import './App.css';
import {Link} from "react-router-dom";

function Users() {
    useEffect(() => {
        fetchItems();
    }, []);     //  [] means it will only run when the component mounts 


    const [items, setItems] = useState([]); // setting state to the items. its an empty array 

    const fetchItems = async () => {
        const data = await fetch("http://localhost:9000/user");
    

        const items = await data.json();
        console.log(items);
        setItems(items);        // setting state to items 
    };

    return (
      <div>
        <h1>Users</h1>
        {items.map(item => (
          <h3 key={item._id}>
            Posts by <Link to={`/users/${item._id}`}>{item.username} </Link>
          </h3>
        ))}
      </div>
    );
}

export default Users;