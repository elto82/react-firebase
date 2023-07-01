import { logOut } from "../funtions/logOut.js";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <button className="button-form" onClick={logOut}>
        LogOut
      </button>
    </div>
  );
};

export default Home;
