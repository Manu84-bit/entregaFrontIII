import Listado from "./components/Listado.js";
import Cabecera from "./components/Cabecera.js";
import { useState } from "react";


// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App() {

  const [totalProducts, setTotalProducts] = useState(0);
  const buyItem= ()=>{
    setTotalProducts(totalProducts + 1)
  } 

  return (
    <div className="App">
      <Cabecera total={totalProducts}/>
      <Listado buyItem={buyItem}/>
    </div>
  );
}

export default App;

