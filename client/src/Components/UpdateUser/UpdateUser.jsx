import React, { useState, useEffect } from "react";
import "../AddUser/AddUser.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";



export const EditUser = () => {

  const users = {
    fname: "",
    lname: "",
    email: ""
  }

  const {id} = useParams();

  const [user, setUser] = useState(users); 
  const navigate = useNavigate();
  const inputChangeHandler =  (e) =>{
    const {name, value} = e.target;
    setUser({...user, [name]:value});
    console.log(user);
  }

  useEffect(() => {
     axios.get(`http://localhost:3000/api/getone/${id}`)
    .then((response)=>{
      setUser(response.data.user)
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [id])
  
  const submitForm = async(e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/api/update/${id}`, user)
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
          <i class="fa-solid fa-arrow-left"></i>
        </Link>
        <h2>Edit User</h2>
        <form className="addUserForm" onSubmit={submitForm}>
          <div className="inputgroup">
            <label htmlFor="fname">First Name</label>
            <input type="text" value={user.fname} onChange={inputChangeHandler} id="fname" name="fname" autoComplete="off" placeholder="First Name"/>
          </div>
          <div className="inputgroup">
            <label htmlFor="lname">Last Name</label>
            <input type="text" value={user.lname} onChange={inputChangeHandler} id="lname" name="lname" autoComplete="off" placeholder="Last Name"/>
          </div>
          <div className="inputgroup">
            <label htmlFor="email">Email</label>
            <input type="text" value={user.email} onChange={inputChangeHandler} id="email" name="email" autoComplete="off" placeholder="Email"/>
          </div>

          <div className="inputgroup">
            <button type="submit" className="addUserButton">Update User</button>
          </div>
        </form>
      </div>
    </div>
  );
};
