import React from "react";
import "./AddUser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export const AddUser = () => {
  const users = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };

  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    // console.log(name + ": " + value);
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const submitForm = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/api/create", user)
    .then((response)=>{
        console.log(response)
        toast.success(response.data.msg, {position: "top-right"})
        navigate("/");
    })
    .catch(error=>
      console.log(error)
    )
  }

  return (
    <div className="body">
      <div className="addUser">
        <Link to={"/"}>
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <h2>Add New User</h2>
        <form className="addUserForm" onSubmit={submitForm}>
          <div className="inputgroup">
            <label htmlFor="fname">First Name </label>
            <input
              type="text"
              onChange={inputHandler}
              id="fname"
              name="fname"
              autoComplete="off"
              placeholder="First Name"
            />
          </div>
          <div className="inputgroup">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              onChange={inputHandler}
              id="lname"
              name="lname"
              autoComplete="off"
              placeholder="Last Name"
            />
          </div>
          <div className="inputgroup">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              onChange={inputHandler}
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Email"
            />
          </div>
          <div className="inputgroup">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              onChange={inputHandler}
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Password"
            />
          </div>
          <div className="inputgroup">
            <button type="submit" className="addUserButton">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
