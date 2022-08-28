import { useState } from "react";

// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

export default function Item(props) {
  const [quantity, setQuantity] = useState(props.item.stock);

  const handleClick = ()=>{
       props.item.stock--;
       setQuantity(props.item.stock);
       props.buyItem();
  }
  
  return (
    <div className="producto" >
      {/* maquetar Item aquí */}
      <h3>{props.item.producto.nombre}</h3>
      <span>{props.item.producto.descripcion}</span>
      <h5>
        En stock:{" "}
        {quantity> 0 ? quantity : <span>agotado</span>}
      </h5>
      <button
        onClick={(event) => {
          handleClick();
        }}
        disabled={quantity < 1}
      >
        {quantity > 0 ? "COMPRAR" : "SIN STOCK"}
      </button>
    </div>
  );
}
