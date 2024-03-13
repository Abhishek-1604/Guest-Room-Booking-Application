import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginScreen() {
  // const nav = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const role = document.getElementById("role").value;
  //   const email = document.getElementById("email").value;
  //   const password = document.getElementById("password").value;

  //   try {
  //     const response = await axios.post("http://localhost:5000/app/v2/login", {
  //       role: role,
  //       email: email,
  //       password: password,
  //     });

  //     const res = response.data;

  //     if (res.msg === "success") {
  //       alert("Logged in successfully");

  //       if (role === "Owner") {
  //         nav('/home');
  //       } else if (role === "Customer") {
  //         // nav(/studdashboard/:${res.userData._id});
  //       }
  //     } else {
  //       alert("Login error: " + res.msg);
  //     }
  //   } catch (error) {
  //     alert("Error: " + error.message);
  //   }
  // };
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {

       axios.post("http://localhost:5000/app/v2/login", {
        role,
        email,
        password
      }).then(res => {
        if (res.data.msg === "success") {
          alert("Logged in successfully");
          if (role === "Owner") {
            nav('/admindashboard');
          } else if (role === "Customer") {
            nav(`/CustomerDashboard/:${res.data._id}`);
          }
        } else {
          alert("Login error : " + res.msg);
        }
      })
    } catch (error) {
      alert("Error :" + error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center m-2 p-2 app col-12" style={{ position: "absolute" }}>
      <form onSubmit={handleSubmit} className="login-form">
        <h1 className="title">LOGIN</h1>
        <div className="form-group">
          <label>Select Role:</label>
          <select className="form-control" id="role" name="role" required>
            <option value="admin">Owner</option>
            <option value="student">Customer</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            id="email"
            type="email"
            className="form-control input-container"
            name="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="form-control input-container"
          />
        </div>
        <div className="button-container">
          <input type="submit" className="btn btn-primary" value="Submit" />
          <p>
            New User ? <Link to={"/reg"}>Register here</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginScreen;
