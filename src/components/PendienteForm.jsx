import "./pendienteForm.css";
import { createPending } from "../funtions/createPending.js";
import { uploadFile } from "../funtions/uploadFile";
const PendienteForm = ({ refreshAllPending }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const priority = e.target.priority.value;
    const description = e.target.description.value;
    const contact = e.target.contact.value;

    const file = e.target.archivo.files[0];
    const url = await uploadFile(file);

    const data = { priority, description, contact, url };
    await createPending(data);
    e.target.reset();
    refreshAllPending();
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
        <label className="label-pendiente-form" htmlFor="">
          Archivo
          <input
            className="input-file"
            type="file"
            name="archivo"
            id="archivo"
          />
        </label>

        <button className="button-pendiente-form">Agregar</button>
      </form>
      <button
        className="buton-buscar"
        onClick={() => {
          const modalSearch = document.querySelector("#search-modal");
          modalSearch.showModal();
        }}
      >
        Buscar
      </button>
    </div>
  );
};

export default PendienteForm;
