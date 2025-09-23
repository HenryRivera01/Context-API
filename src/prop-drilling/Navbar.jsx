import { useState } from "react";
import { NavLinks } from "./NavLinks";
export const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" });

  function logout() {
    setUser(null);
  }
  return (
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavLinks user={user} logout={logout} />
    </nav>
  );
};
