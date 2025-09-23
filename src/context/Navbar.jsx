import { useState, createContext } from "react";
import { NavLinks } from "./NavLinks";

export const NavBarContext = createContext()

export const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" });
  
  function logout() {
    setUser(null);
  }
  return (
    <NavBarContext.Provider value={{user, logout}}>
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavLinks />
    </nav>
    </NavBarContext.Provider>
  );
};
