import React from "react";

const UsersGet = (data) => {  
  return data.data?.map((item) => {
    return (
      <div key={item?.name} className="users__items">
        <span className="users__item-top">
          <p className="users__id">{item?.id}</p>
          <p className="users__name">{item?.name}</p>
          <p className="users__username">{item?.username}</p>
        </span>
        <p className="users__email">
          <span>email:</span> {item?.email}
        </p>
        <p className="users__street">
          <span>street:</span> {item?.address?.street}
        </p>
        <p className="users__city">
          <span>city:</span> {item?.address?.city}
        </p>
        <p className="users__phone">
          <span>phone:</span> {item?.phone}
        </p>
        <p className="users__company">
          <span>company:</span> {item?.company.name}
        </p>
      </div>
    );
  });
};

export default UsersGet;
