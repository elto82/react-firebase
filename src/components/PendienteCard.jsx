import "./pendienteCard.css";
import { deletePending } from "../funtions/deletePending";
const PendienteCard = ({
  pendiente,
  setSelectedPending,
  refreshAllPending,
}) => {
  const mostrarModal = () => {
    setSelectedPending(pendiente);
    const modal = document.getElementById("modal-editar-pendiente");
    modal.showModal();
  };

  return (
    <div className="container-card">
      <div className="card">
        <h3>Prioridad</h3>
        <p>{pendiente.priority}</p>
      </div>

      <div className="card">
        <h3>Descripcion</h3>
        <p>{pendiente.description}</p>
      </div>

      <div className="card">
        <h3>Contacto</h3>
        <p>{pendiente.contact}</p>
      </div>
      <button className="btn-editar" onClick={mostrarModal}>
        Editar
      </button>
      <button
        className="btn-eliminar"
        onClick={() => {
          deletePending(pendiente.id).then((confirm) => {
            refreshAllPending();
          });
        }}
      >
        Eliminar
      </button>
    </div>
  );
};

export default PendienteCard;
