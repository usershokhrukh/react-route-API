import React from "react";

const PostsGet = (data) => {  
  return data.data?.map((item) => {
    return (
      <div key={item?.title} className="posts__items">
        <span className="posts__item-top">
          <p className="posts__id">{item?.id}</p>
          <p className="posts__title">{item?.title}</p>
        </span>
        <p className="posts__body">
          {item?.body}
        </p>
      </div>
    );
  });
};

export default PostsGet;
