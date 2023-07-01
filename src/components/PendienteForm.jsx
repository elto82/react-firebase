import "./pendienteForm.css";
import { crearPendiente } from "../funtions/crearPendiente.js";
const PendienteForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const priority = e.target.priority.value;
    const description = e.target.description.value;
    const contact = e.target.contact.value;

    const data = { priority, description, contact };
    await crearPendiente(data);
    e.target.reset();
  };

  return (
    <div className="pendienteForm">
      <form onSubmit={handleSubmit} className="form-pendiente">
        <label className="label-pendiente-form">
          Prioridad
          <select id="priority" className="select-pendiente-form">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>

        <label className="label-pendiente-form">
          Descripción
          <input
            id="description"
            className="input-pendiente-form"
            type="text"
          />
        </label>

        <label className="label-pendiente-form">
          Contacto
          <input id="contact" className="input-pendiente-form" type="email" />
        </label>

        <button className="button-pendiente-form">Agregar</button>
      </form>
    </div>
  );
};

export default PendienteForm;
