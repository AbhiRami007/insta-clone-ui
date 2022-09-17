import React, { useEffect, useState } from "react";
import "../postView/postView.css";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function PostHead() {
  return (
    <>
      <div className="post-header">
        <div className="post-logo">
          <Link to="/posts" style={{ textDecoration: "none" }}>
            <img src={logo} alt="logo" />
            <span style={{ color: "green" }}>InstaClone</span>
          </Link>
        </div>
        <div className="cam-icon">
          <Link to="/add-posts">
            <i className="fa fa-camera fa-2x"></i>
          </Link>
        </div>
      </div>
      <hr></hr>
    </>
  );
}
