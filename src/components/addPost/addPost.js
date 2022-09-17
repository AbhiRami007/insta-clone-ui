import React from "react";
import { useNavigate } from "react-router-dom";
import PostHead from "../PostHead/postHead";

const AddPost = () => {
  let navigate = useNavigate();

  function savePost(e) {
    e.preventDefault();
    console.log(window.location);
    const data = {
      name: e.target[1].value,
      location: e.target[2].value,
      description: e.target[3].value,
      PostImage: __dirname + e.target[0].files[0].name,
      date: new Date()
    };
    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((value) => {
        navigate("/posts");
      });
  }
  return (
    <>
      <div className="post-container">
        <PostHead />

        <div className="post-content">
          <form onSubmit={savePost}>
            <input type="file" name="image" />
            <input type="text" name="author" placeholder="Author" />
            <input type="text" name="location" placeholder="Location" />
            <input type="text" name="description" placeholder="Description" />
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPost;
