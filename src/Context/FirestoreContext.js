import fsContexto from "./Contexto";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  deleteDoc,
  query,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { fs } from "../Services/Firebase";
import { useState } from "react";
import "bootswatch/dist/quartz/bootstrap.min.css";
export default function FirestoreContext(props) {
  const { children } = props;
  const [Producto, setProducto] = useState([]);
  const [prueba,setPrueba] = useState([])

  const registro = async  (NombreProduc, Cantidad, FotoProduct, Precio, Value) => {
    await addDoc(collection(fs, "Productos"), {
      NombreProduc: NombreProduc,
      Cantidad: Cantidad,
      FotoProduct: FotoProduct,
      Precio: Precio,
      Categoria: Value,
    });

    
  };

  const modificar = async  (
    identificador,
    NombreProduc,
    Cantidad,
    FotoProduct,
    Precio,
  ) => {
    await updateDoc(doc(fs, "Productos",identificador), {
      NombreProduc: NombreProduc,
      Cantidad: Cantidad,
      FotoProduct: FotoProduct,
      Precio: Precio,

    });
  };

  const eliminar = (identificador) => {
    deleteDoc(doc(fs, "Productos", identificador));
  };

  const Imprimir = (newArray) => {
    newArray.forEach((element) => {
        console.log("100"); // 100, 200, 300

    });
  }

  return (
    <>
      <fsContexto.Provider
        value={{
          registro,
          modificar,
          Producto,
          eliminar,
          Imprimir,
        }}
      >
        {children}
      </fsContexto.Provider>
    </>
  );
}
