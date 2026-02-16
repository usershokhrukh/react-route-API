import React, {useEffect, useState} from "react";
import axios from "axios";
import PhotosGet from "./PhotosGet.jsx";
import Loader from "./Loader.jsx";

const Photos = () => {
  async function getRequest(url) {
    const request = await axios.get(url);
    return request;
  }
  try {
    const [photosData, setPhotosData] = useState([]);
    const [boolLoad, setBoolLoad] = useState(true);

    useEffect(() => {
      const getResponse = (url) => {
        const response = getRequest(url)
          .then((data) => dataPhotos(data?.data))
          .catch((error) => {
            throw new Error(error);
          });
      };
      function dataPhotos(data) {
        if (!localStorage.getItem("photos")) {
          const dataArray = JSON.stringify(data);
          localStorage.setItem("photos", dataArray);
        }
        setPhotosData(data);
        setTimeout(() => {
          setBoolLoad(false);
        }, 100);
      }
      const photosAPI = "https://jsonplaceholder.typicode.com/photos";
      if (localStorage.getItem("photos")) {
        const data = JSON.parse(localStorage.getItem("photos"));
        dataPhotos(data);
      } else {
        getResponse(photosAPI);
      }
    }, []);

    return (
      <div className="photos">
        <Loader bool={boolLoad} />

        <div className="photos__card">
          <PhotosGet data={photosData} />
        </div>
      </div>
    );
  } catch (error) {
    throw new Error(error);
  }
};

export default Photos;
