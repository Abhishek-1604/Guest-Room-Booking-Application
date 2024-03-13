import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'

function RegisterScreen() {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [pic, setPic] = useState("");

  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(name, email, password, pic);
    if (name === "") {
      alert("must fill the name");
    } else if (email === "") {
      alert("must fill the email field");
    } else if (password === "" && confirmPassword === "") {
      alert("must fill the password field");
    } else if (password !== confirmPassword) {
      alert("password doesn't match");
    } else {
      const { data } = await axios.post("http://localhost:5000/app/v2/reg", {
        role,
        name,
        email,
        password,
      
      });
      console.log(data);
      alert("Registered Successfully");
      nav("/login");
    }
  };

  return (
    <html>
      <body style={{backgroundColor:"blue",backgroundSize:"cover",height:"100vh"}}>
    <div class="container-fluid row  " style={{justifyContent:"center"}}>
      <div class="col-lg-6 col-xsm-8 p-5" style={{backgroundColor:"#FFFFFF",marginTop:"150px",border:"2px solid black",borderRadius:25}}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Select Role:</label>
         
          <select className="form-control" id="role" name="role" required onChange={(e) => setRole(e.target.value)} value={role}>
          
            
            <option value="Owner">Owner</option>
            <option value="Customer">Customer</option>
          </select>
        </div>
        <div className="mb-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="User Name"
            required
            />
        </div>
        <div className="mb-3">
          
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email ID"
          />
        </div>
        <div className="mb-3">
          
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="mb-3">
         
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Confirm Password"
          />
        </div>
        {/* <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Profile
          </label>
          <input
            value={pic}
            onChange={(e) => setPic(e.target.value)}
            type="file"
          />
        </div> */}
        <button type="submit" className="btn btn-outline-primary" id="submit" style={{ }}>
          Submit
        </button>
      </form>
      </div>
    </div>
    
    </body>
    </html>

  );
}

export default RegisterScreen;
