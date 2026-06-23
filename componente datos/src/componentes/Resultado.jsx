function Resultado({ datos }) {
  if (!datos) {
    return (
      <div className="card">
        <h2>Componente Resultado</h2>
        <p>Ingrese datos y presione Resultado</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Componente Resultado</h2>

      <p>
        <strong>Producto:</strong> {datos.producto}
      </p>

      <p>
        <strong>Descuento 10%:</strong> ${datos.descuento}
      </p>

      <p>
        <strong>A pagar:</strong> ${datos.total}
      </p>

      {datos.descuento > 0 ? (
        <p className="verde">Con descuento</p>
      ) : (
        <p className="rojo">Sin descuento</p>
      )}
    </div>
  );
}

export default Resultado;