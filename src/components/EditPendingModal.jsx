import { useState, useEffect } from "react";
import "./editPendingModal.css";
import { editPending } from "../funtions/editPending";

const EditPendingModal = ({ pendiente, refreshAllPending }) => {
  const [pendingEdit, setPendingEdit] = useState({ ...pendiente });

  useEffect(() => {
    setPendingEdit({ ...pendiente });
  }, [pendiente]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editPending(pendingEdit.id, pendingEdit).then((res) => {
      const modal = document.getElementById("modal-editar-pendiente");
      refreshAllPending();
      modal.close();
    });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setPendingEdit((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <dialog className="modal-dialog-pendiente" id="modal-editar-pendiente">
      <form className="form-pendiente" onSubmit={handleSubmit}>
        <label className="label-pendiente-form">
          Prioridad
          <select
            id="priority"
            className="select-pendiente-form"
            value={pendingEdit?.priority}
            onChange={handleInputChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>

        <label className="label-pendiente-form">
          Descripción
          <input
            value={pendingEdit?.description}
            id="description"
            className="input-pendiente-form"
            type="text"
            onChange={handleInputChange}
          />
        </label>

        <label className="label-pendiente-form">
          Contacto
          <input
            id="contact"
            className="input-pendiente-form"
            type="email"
            value={pendingEdit?.contact}
            onChange={handleInputChange}
          />
        </label>

        <button className="button-pendiente-form" type="submit">
          Editar
        </button>
      </form>
    </dialog>
  );
};

export default EditPendingModal;
