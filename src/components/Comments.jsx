import React, {useEffect, useState} from "react";
import axios from "axios";
import CommentsGet from "./CommentsGet.jsx";
import Loader from "./Loader.jsx";
const Comments = () => {
  async function getRequest(url) {
    const request = await axios.get(url);
    return request;
  }
  try {
    const [commentsData, setCommentsData] = useState([]);
    const [boolLoad, setBoolLoad] = useState(true)
    useEffect(() => {
      const getResponse = (url) => {
        const response = getRequest(url)
          .then((data) => dataComments(data?.data))
          .catch((error) => {
            throw new Error(error);
          });
      };
      function dataComments(data) {
        if (!localStorage.getItem("comments")) {
          const dataArray = JSON.stringify(data);
          localStorage.setItem("comments", dataArray);
        }
        setCommentsData(data);
        setTimeout(() => {
          setBoolLoad(false)
        }, 100);
      }
      const commentsAPI = "https://jsonplaceholder.typicode.com/comments";
      if (localStorage.getItem("comments")) {
        const data = JSON.parse(localStorage.getItem("comments"));
        dataComments(data);
      } else {
        getResponse(commentsAPI);
      }
    }, []);

    return (
      <div className="comments">
        <Loader bool={boolLoad}/>
        <div className="comments__card">
          <CommentsGet data={commentsData} />
        </div>
      </div>
    );
  } catch (error) {
    throw new Error(error);
  }
};

export default Comments;
