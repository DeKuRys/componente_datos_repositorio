import { useState } from "react";
import Datos from "./componentes/Datos";
import Resultado from "./componentes/Resultado";
import "./App.css";

function App() {
  const [resultado, setResultado] = useState(null);

  return (
    <div className="container">
      <Datos setResultado={setResultado} />
      <Resultado datos={resultado} />
    </div>
  );
}

export default App;