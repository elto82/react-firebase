import { searchPending } from "../funtions/searchPending";
import { useState } from "react";
import "./searchModal.css";

const SearchModal = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const string = e.target.searchInput.value;
    searchPending(string).then((res) => setResult(res));
    e.target.reset();
  };

  return (
    <dialog id="search-modal">
      <form onSubmit={handleSubmit} className="form-search-modal">
        <input type="text" placeholder="Buscar..." id="searchInput" />
        <button type="submit">Buscar</button>
      </form>
      {result &&
        result.map((item) => (
          <div key={item.id} className="search-modal-item">
            <div className="item-image-container">
              <img src={item.url} alt="Imagen" className="item-image" />
            </div>
            {Object.entries(item).map(
              ([fieldName, value]) =>
                fieldName !== "id" &&
                fieldName !== "url" &&
                fieldName !== "image" && (
                  <div key={fieldName}>
                    <label>{`${fieldName}:`}</label>
                    <p>{value}</p>
                  </div>
                )
            )}
          </div>
        ))}
    </dialog>
  );
};

export default SearchModal;
