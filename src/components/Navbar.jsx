import { logOut } from "../funtions/logOut";
import "./navbar.css";
const Navbar = ({ user }) => {
  return (
    <nav>
      {user.email}{" "}
      <button className="button-nav" onClick={logOut}>
        LogOut
      </button>
    </nav>
  );
};

export default Navbar;
