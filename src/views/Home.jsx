import React from "react";
import Navbar from "../components/Navbar";
import PendienteForm from "../components/PendienteForm";
import "./home.css";

const Home = ({ user }) => {
  return (
    <div className="home">
      <h1 className="title">Home</h1>
      <Navbar user={user} />
      <PendienteForm />
    </div>
  );
};

export default Home;
