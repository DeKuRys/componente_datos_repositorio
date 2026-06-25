import { useState } from "react";

function Datos({ setResultado }) {
  const [producto, setProducto] = useState("");
  const [valor, setValor] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [error, setError] = useState("");

  const calcular = () => {
    if (
      producto.trim() === "" ||
      valor.trim() === "" ||
      cantidad.trim() === ""
    ) {
      setError("Debe completar todos los campos");
      return;
    }

    if (Number(valor) <= 0 || Number(cantidad) <= 0) {
      setError("Valor y cantidad deben ser mayores a 0");
      return;
    }

    setError("");

    const subtotal = Number(valor) * Number(cantidad);

    let descuento = 0;

    if (Number(cantidad) > 3) {
      descuento = subtotal * 0.1;
    }

    const total = subtotal - descuento;

    setResultado({
      producto,
      valor,
      cantidad,
      descuento,
      total,
    });
  };

  return (
    <div className="card">
      <h2>Componente Datos</h2>

      <label>Nombre Producto</label>
      <input
        type="text"
        value={producto}
        onChange={(e) => setProducto(e.target.value)}
      />

      <label>Valor</label>
      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />

      <label>Cantidad</label>
      <input
        type="number"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <button onClick={calcular}>Resultado</button>
    </div>
  );
}

export default Datos;