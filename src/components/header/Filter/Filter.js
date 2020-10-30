import React from "react";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../../../actions/actionCreator";

function Filter(props) {
  const buttons = [
    { all: "SHOW_ALL" },
    { active: "SHOW_ACTIVE" },
    { done: "SHOW_COMPLITED" },
  ];
  const { filter, todoFilter } = props;

  return (
    <div
      className="btn-group btn-group-sm float-right btn-filter"
      role="group"
      aria-label="Basic example"
    >
      {buttons.map((btn) => {
          const name = Object.keys(btn);
        const btnStyle =
        String(Object.values(btn)) === filter ? "btn btn-secondary" : "btn btn-outline-secondary";
        return (
          <button
            key={name}
            type="button"
            className={btnStyle}
            onClick={() => todoFilter(String(Object.values(btn)))}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
}

const mapStateToProps = state => ({
    filter: state.visibilityFilter
});

const mapDispatchToProps = (dispatch) => ({
  todoFilter: filter => dispatch(setVisibilityFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
