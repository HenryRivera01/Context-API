import React from "react";
import { UserContainer } from "./UserContainer";

export const NavLinks = ({ user, logout }) => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">home</a>
        </li>
      </ul>
      <UserContainer user={user} logout={logout} />
    </div>
  );
};
