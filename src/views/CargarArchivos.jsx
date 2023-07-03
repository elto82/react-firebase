import { uploadFile } from "../funtions/uploadFile";

const CargarArchivos = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target.archivo.files[0];
    uploadFile(file);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="archivo" id="archivo" />
        <button type="submit">Cargar</button>
      </form>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/react-firebase-eabb5.appspot.com/o/carpeta2%2Fsubcarpeta2%2Farchicotest.png?alt=media&token=417963fb-c3e2-4dc5-825b-7a975d245e03"
        alt="michi is a cat"
      />
    </div>
  );
};

export default CargarArchivos;
