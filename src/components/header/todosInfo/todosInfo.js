import React from "react";

function TodosInfo(props) {
  const { active, done } = props.info;
  return (
    <div className="info float-left">
      <span className="number-done">
        Complited<strong className="count">{done}</strong>
      </span>
      <span className="number-active">
        Have to be done<strong className="count">{active}</strong>
      </span>
    </div>
  );
}
export default TodosInfo;