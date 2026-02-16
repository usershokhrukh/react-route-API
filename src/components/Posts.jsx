import React, {useEffect, useState} from "react";
import axios from "axios";
import {useAsyncError} from "react-router-dom";
import PostsGet from "./PostsGet";
import Loader from "./Loader.jsx";

const Posts = () => {
  async function getRequest(url) {
    const request = await axios.get(url);
    return request;
  }
  try {
    const [postsData, setPostsData] = useState([]);
    const [boolLoad, setBoolLoad] = useState(true);

    useEffect(() => {
      const getResponse = (url) => {
        const response = getRequest(url)
          .then((data) => dataPosts(data?.data))
          .catch((error) => {
            throw new Error(error);
          });
      };
      function dataPosts(data) {
        if (!localStorage.getItem("posts")) {
          const dataArray = JSON.stringify(data);
          localStorage.setItem("posts", dataArray);
        }
        setPostsData(data);
        setTimeout(() => {
          setBoolLoad(false);
        }, 100);
      }
      const postsAPI = "https://jsonplaceholder.typicode.com/posts";
      if (localStorage.getItem("posts")) {
        const data = JSON.parse(localStorage.getItem("posts"));
        dataPosts(data);
      } else {
        getResponse(postsAPI);
      }
    }, []);

    return (
      <div className="posts">
        <Loader bool={boolLoad} />
        <div className="posts__card">
          <PostsGet data={postsData} />
        </div>
      </div>
    );
  } catch (error) {
    throw new Error(error);
  }
};

export default Posts;
