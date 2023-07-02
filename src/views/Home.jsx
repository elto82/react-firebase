import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PendienteForm from "../components/PendienteForm";
import "./home.css";
import { getAllPending } from "../funtions/readAllPending";
import PendienteCard from "../components/PendienteCard";
import EditPendingModal from "../components/EditPendingModal";

const Home = ({ user }) => {
  const [allPending, setAllPending] = useState([]);
  const [selectedPending, setSelectedPending] = useState(null);

  function refreshAllPending() {
    getAllPending()
      .then((pending) => setAllPending(pending))
      .catch((error) => {
        console.log(error);
        alert("Error al cargar los datos");
        return;
      });
  }

  useEffect(() => {
    refreshAllPending();
  }, []);
  return (
    <div className="home">
      <h1 className="title">Home</h1>
      <Navbar user={user} />

      <EditPendingModal
        pendiente={selectedPending}
        refreshAllPending={refreshAllPending}
      />

      <PendienteForm refreshAllPending={refreshAllPending} />
      {allPending &&
        allPending.map((pending) => (
          <PendienteCard
            pendiente={pending}
            key={pending.id}
            setSelectedPending={setSelectedPending}
          />
        ))}
    </div>
  );
};

export default Home;
