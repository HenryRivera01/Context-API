import { useContext } from "react";
import { NavBarContext } from "./Navbar";

export const UserContainer = () => {
  const { user, logout } = useContext(NavBarContext);
 
  return(
  <div className='user-container'>
      {user?<>
        <p>Hello There, {user?.name?.toUpperCase()}</p>
        <button className='btn' onClick={logout}>
            logout
        </button>
      </>:
        <p>Please Login</p>
      }
        
    </div>
    )
};
