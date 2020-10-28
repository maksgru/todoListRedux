import React from "react";
import "./header.css";

function Header(props) {
  const { done, active, filter, todoFilter } = props;
  const buttons =  ['all', 'active', 'done'];
  return (
    <div className="header">
      <h1>My Todo List</h1>
      <div className="info float-left">
        <span className="number-done">
          Complited<strong className="count">{done}</strong>
        </span>
        <span className="number-active">
          Have to be done<strong className="count">{active}</strong>
        </span>
      </div>

      <div
        className="btn-group btn-group-sm float-right btn-filter"
        role="group"
        aria-label="Basic example"
      >
      {
        buttons.map(name => {
          const btnStyle = name === filter ? "btn btn-secondary" : "btn btn-outline-secondary";
          return <button
          type="button"
          className={btnStyle}
          onClick={() => todoFilter(name)}
        >
          {name}
        </button>
        })
      }
      </div>
    </div>
  );
}
export default Header;
