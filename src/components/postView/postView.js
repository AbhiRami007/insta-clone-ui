import React, { useEffect, useState } from "react";
import "./postView.css";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import PostHead from "../PostHead/postHead";

export default function PostView() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((response) => response.json())
      .then((value) => {
        console.log(value);
        setData(value.data);
      });
  }, []);
  return (
    <>
      <div className="post-container">
        <PostHead />
        <div className="post-content">
          {data.map((item, i) => {
            return (
              <>
                <div className="post-data">
                  <div className="content-top">
                    <div className="content-top-left">
                      <div className="name">
                        <b>{item.name}</b>
                      </div>
                      <div className="location">{item.location}</div>
                    </div>
                    <div className="content-top-right">
                      <div className="dots">
                        <img
                          src="https://img.icons8.com/material-outlined/24/000000/dots-loading--v5.png"
                          alt="dots"
                          className="rightpart"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="content-image">
                    <img
                      src={window.location.origin + item.PostImage}
                      alt="image"
                    />
                  </div>
                  <div className="content-bottom">
                    <div className="bottom-top">
                      <i class="fa fa-heart-o" style={{ fontSize: "24px" }}></i>
                      <i
                        class="fa fa-paper-plane-o"
                        style={{ fontSize: "24px" }}
                      ></i>
                      <div className="date">{item.date.split("T")[0]}</div>
                    </div>
                    <div className="likes">{item.likes} Likes</div>
                    <div className="description">{item.description}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
