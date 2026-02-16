import React, {useEffect, useState} from "react";
import axios from "axios";
import {useAsyncError} from "react-router-dom";
import AlbumsGet from "./AlbumsGet";
import Loader from "./Loader.jsx";
const Albums = () => {
  async function getRequest(url) {
    const request = await axios.get(url);
    return request;
  }
  try {
    const [albumsData, setAlbumsData] = useState([]);
        const [boolLoad, setBoolLoad] = useState(true)
    
    useEffect(() => {
      const getResponse = (url) => {
        const response = getRequest(url)
          .then((data) => dataAlbums(data?.data))
          .catch((error) => {
            throw new Error(error);
          });
      };
      function dataAlbums(data) {
        if (!localStorage.getItem("posts")) {
          const dataArray = JSON.stringify(data);
          localStorage.setItem("posts", dataArray);
        }
        setAlbumsData(data);
        setTimeout(() => {
          setBoolLoad(false)
        }, 100);
      }
      const albumsAPI = "https://jsonplaceholder.typicode.com/albums";
      if (localStorage.getItem("albums")) {
        const data = JSON.parse(localStorage.getItem("albums"));
        dataAlbums(data);
      } else {
        getResponse(albumsAPI);
      }
    }, []);

    return (
      <div className="albums">
        <Loader bool={boolLoad}/>
        <div className="albums__card">
          <AlbumsGet data={albumsData} />
        </div>
      </div>
    );
  } catch (error) {
    throw new Error(error);
  }
};

export default Albums;
