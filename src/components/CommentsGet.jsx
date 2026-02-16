import React from "react";

const CommentsGet = (data) => {
  return data.data?.map((item) => {
    return (
      <div key={item?.name} className="comments__items">
        <span className="comments__item-top">
          <p className="comments__id">{item?.id}</p>
          <p className="comments__name">{}item?.name</p>
        </span>
        <p className="comments__email">
          <span>email:</span> {item?.email}
        </p>
        <p className="comments__body">{item?.body}</p>
      </div>
    );
  });
};

export default CommentsGet;
