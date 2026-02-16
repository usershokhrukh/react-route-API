import React from "react";

const PhotosGet = (data) => {
  return data?.data.map((item, index) => {
    if (index < 300) {
      return (
        <div key={item?.title} className="photos__items">
          <span className="photos__item-top">
            <p className="photos__id">{item?.id}</p>
            <p className="photos__title">{item?.title}</p>
          </span>
          <a href={item?.url} target="_blank" className="photos__url">
            {item?.url}
          </a>
          <img className="photos__img" src={item?.url} alt="couldn't found" />
        </div>
      );
    }else {
      return;
    }
  });
};

export default PhotosGet;
