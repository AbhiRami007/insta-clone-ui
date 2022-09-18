import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostHead from "../PostHead/postHead";
import "./addPost.css";
const AddPost = () => {
  let navigate = useNavigate();
  // const baseUrl = "https://insta-clone-server-application.herokuapp.com";
  const baseUrl = "http://localhost:8080";
  function savePost(e) {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", e.target.author.value); //append the values with key, value pair
      formData.append("location", e.target.location.value);
      formData.append("description", e.target.description.value);
      formData.append("date", new Date());
      formData.append("PostImage", e.target[0]?.files[0]?.name);
      formData.append("file", e.target[0]?.files[0]);

      fetch(`${baseUrl}/posts`, {
        method: "POST",
        body: formData
      })
        .then((response) => response.json())
        .then((value) => {
          if (value.message) {
            alert(value.message);
          } else {
            navigate("/posts");
          }
        });
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <>
      <div className="post-container">
        <PostHead />

        <div className="post-content">
          <form onSubmit={savePost} className="post-content-form">
            <input type="file" name="image" />
            <div className="author-loc">
              <input
                type="text"
                name="author"
                placeholder="Author"
                className="author"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="location"
              />
            </div>
            <input type="text" name="description" placeholder="Description" />
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPost;
