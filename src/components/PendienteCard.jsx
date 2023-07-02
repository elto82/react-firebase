import "./pendienteCard.css";

const PendienteCard = ({ pendiente }) => {
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
    </div>
  );
};

export default PendienteCard;
