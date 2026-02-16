import React from "react";

const TodosGet = (data) => {
  return data.data?.map((item) => {
    return (
      <div key={item?.title} className="todos__items">
        <span className="todos__item-top">
          <p className="todos__id">{item?.id}</p>
          <p className="todos__title">{item?.title}</p>
        </span>
        <span className="todos-completed">
          <span>completed: </span> {`${item.completed}`}
        </span>
      </div>
    );
  });
};

export default TodosGet;
