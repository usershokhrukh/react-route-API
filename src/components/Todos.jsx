import React, {useEffect, useState} from "react";
import axios from "axios";
import {useAsyncError} from "react-router-dom";
import TodosGet from "./TodosGet";
import Loader from "./Loader.jsx";

const Todos = () => {
  async function getRequest(url) {
    const request = await axios.get(url);
    return request;
  }
  try {
    const [todosData, setTodosData] = useState([]);
    const [boolLoad, setBoolLoad] = useState(true);

    useEffect(() => {
      const getResponse = (url) => {
        const response = getRequest(url)
          .then((data) => dataTodos(data?.data))
          .catch((error) => {
            throw new Error(error);
          });
      };
      function dataTodos(data) {
        if (!localStorage.getItem("posts")) {
          const dataArray = JSON.stringify(data);
          localStorage.setItem("posts", dataArray);
        }
        setTodosData(data);
        setTimeout(() => {
          setBoolLoad(false);
        }, 100);
      }
      const todosAPI = "https://jsonplaceholder.typicode.com/todos";
      if (localStorage.getItem("todos")) {
        const data = JSON.parse(localStorage.getItem("todos"));
        dataTodos(data);
      } else {
        getResponse(todosAPI);
      }
    }, []);

    return (
      <div className="todos">
        <Loader bool={boolLoad} />
        <div className="todos__card">
          <TodosGet data={todosData} />
        </div>
      </div>
    );
  } catch (error) {
    throw new Error(error);
  }
};

export default Todos;
