//  video on react router       https://www.youtube.com/watch?v=Law7wfdg_ls

import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function PostDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []); //  [] means it will only run when the component mounts

  const [blogpost, setItem] = useState({});
  const [author, setAuthor] = useState([]); // setting state to the items. its an empty array

  const fetchItem = async () => {

;   const item = await fetch(`http://localhost:9000/message/${match.params.id}`);
    const blogpost = await item.json()
    const specificAuthor = blogpost.user;
    setItem(blogpost); // setting state to items
    setAuthor(specificAuthor);
    //console.log(specificAuthor);
    console.log(blogpost._id);
  };

  return (
    <div>
      <h1>{blogpost.text}</h1>
      <h3>By <Link to={`/users/${author._id}`}> {author.username}</Link></h3>
    </div>
    
  );
}

export default PostDetail;


/*
{item.map(detail => (
        <h3 key={detail._id}>
          <Link to={`/posts/${detail._id}`}>{detail.text}</Link>
        </h3>
      ))}
*/