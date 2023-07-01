import { useState } from "react";
import "./styles/main.css";
import Home from "./views/Home";
import Login from "./views/Login.jsx";
import { auth } from "./firebase/credentials.js";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase);
    } else {
      setUser(null);
    }
  });

  return user ? <Home user={user} /> : <Login />;
}

export default App;
