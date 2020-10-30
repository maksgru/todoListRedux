import React from "react";
import Filter from "./Filter/Filter";
import Info from "../../containers/Info";
import "./header.css";

function Header(props) {
  return (
    <div className="header">
      <h1 className="text-secondary">My Todo List</h1>
      <Info />
      <Filter />
    </div>
  );
}
export default Header;
