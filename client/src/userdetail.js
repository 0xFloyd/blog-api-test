//  video on react router       https://www.youtube.com/watch?v=Law7wfdg_ls

import React, { useState, useEffect, Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function UserDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []); //  [] means it will only run when the component mounts

  const [authorsPosts, setPosts] = useState([]); // setting intial state of authorsPosts to empty array
  const [author, setAuthor] = useState();

  const fetchItem = async () => {
    const authorsPosts  = [];
    //console.log(match);
    const postAuthorId = match.params.id;
    const data = await fetch(`http://localhost:9000/message`);
    const messages = await data.json();
    messages.forEach(message => {
      if (message.user._id == postAuthorId) {
        authorsPosts.push(message);
      };
    }); 
  
    const postAuthor = messages[0].user.username; //its grabbing first message returned, but the author should be the same for all itenms in the array
    setAuthor(postAuthor);
    setPosts(authorsPosts); // setting state to items
  };
  
  return (
    <div>
      <h1> Posts by {author}</h1>
      {authorsPosts.map(post => (
        <h3 key={post._id}>
          <Link to={`/posts/${post._id}`}>{post.text} </Link>
        </h3>
      ))}
    </div>
  );
}

export default UserDetail;


/*
{item.map(detail => (
        <h3 key={detail._id}>
          <Link to={`/posts/${detail._id}`}>{detail.text}</Link>
        </h3>
      ))}
*/