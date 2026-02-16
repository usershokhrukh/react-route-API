import React from 'react'

const AlbumsGet = (data) => {
  return data.data?.map((item) => {
    return (
      <div key={item?.title} className="albums__items">
        <span className="albums__item-top">
          <p className="albums__id">{item?.id}</p>
          <p className="albums__title">{item?.title}</p>
        </span>
      </div>
    );
  });
}

export default AlbumsGet