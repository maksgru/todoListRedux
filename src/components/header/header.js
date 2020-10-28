import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
  render() {
    const { done, nonDone } = this.props;
    return (
      <div className="header">
        <h1>My Todo List</h1>
        <span className="done">
          <button className="btn btn-outline-secondary btn-sm shadow-none icon-btn">
            <i className="fa fa-eye" aria-hidden="true" />
          </button>
          Complited<strong className="count">{done}</strong>
        </span>
        <span className="nondone">
          <button className="btn btn-outline-secondary btn-sm shadow-none icon-btn">
            <i className="fa fa-eye-slash" aria-hidden="true" />
          </button>
          Have to be done<strong className="count">{nonDone}</strong>
        </span>
      </div>
    );
  }
}
