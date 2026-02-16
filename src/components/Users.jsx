import React, {useEffect, useState} from "react";
import axios from "axios";
import UsersGet from "./UsersGet.jsx";
import Loader from "./Loader.jsx";

const Users = () => {
  async function getRequest(url) {
    const request = await axios.get(url);
    return request;
  }
  try {
    const [usersData, setUsersData] = useState([]);
    const [boolLoad, setBoolLoad] = useState(true);

    useEffect(() => {
      const getResponse = (url) => {
        const response = getRequest(url)
          .then((data) => dataUsers(data?.data))
          .catch((error) => {
            throw new Error(error);
          });
      };
      function dataUsers(data) {
        if (!localStorage.getItem("users")) {
          const dataArray = JSON.stringify(data);
          localStorage.setItem("users", dataArray);
        }
        setUsersData(data);
        setTimeout(() => {
          setBoolLoad(false);
        }, 100);
      }
      const usersAPI = "https://jsonplaceholder.typicode.com/users";
      if (localStorage.getItem("users")) {
        const data = JSON.parse(localStorage.getItem("users"));
        dataUsers(data);
      } else {
        getResponse(usersAPI);
      }
    }, []);

    return (
      <div className="users">
        <Loader bool={boolLoad} />
        <div className="users__card">
          <UsersGet data={usersData} />
        </div>
      </div>
    );
  } catch (error) {
    throw new Error(error);
  }
};

export default Users;
