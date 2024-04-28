import React, { useEffect } from "react";
import { Link} from "react-router-dom";
import "./User.css";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const User = () => {
  const [users, setUsers] = useState([]);

  // const navigate = useNavigate();

  useEffect(() => {
    const fetchusers = async () => {
      const response = await axios.get("http://localhost:3000/api/getall");
      setUsers(response.data);
    };
    fetchusers();
  }, []);

  const deleteUser = async (UserID) => {
    await axios.delete(`http://localhost:3000/api/delete/${UserID}`)
    .then((response)=>{
        toast.success(response.data.msg);
        setUsers(users.filter(user => user._id !== UserID));
    })
    .catch((error)=>{console.log(error)})
  }

  return (
    <div className="userTable">
      <Link to={"/add"} className="addButton">
        Add User
      </Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user._id}>
                <td>{index+1}</td>
                <td>{user.fname} {user.lname}</td>
                <td>{user.email}</td>
                <td className="action">
                  <i class="fa-solid fa-trash" onClick={()=>deleteUser(user._id)}></i>

                  <Link to={`/edit/`+user._id}>
                    <i class="fa-solid fa-pen"></i>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
