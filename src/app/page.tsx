"use client";

import { useState } from "react";
import ImprimirSaludo from "./componentes/Prueba";

interface Persona {
  nombre: string,
  apellido: string,
  edad: number,
  id: number,
  bool: boolean
}

const listaPersona: Persona[] = [
  { id: 1, nombre: "Pepito", apellido: "Sappe", edad: 18, bool: false },
  { id: 2, nombre: "Lola", apellido: "Loqutia", edad: 15, bool: false },
  { id: 3, nombre: "Nolan", apellido: "Skibidi", edad: 30, bool: false }
]

export default function Home() {
  const [objetos, setObjetos] = useState(listaPersona);

  function handleCambiarNombre(event: string, id: number) {
    setObjetos(objetos.map((elemento) => {
      if (elemento.id == id) {
        return {
          ...elemento,
          nombre: event
        }
      } else {
        return elemento;
      }
    }));
  }

  function handleBoolPersona(id: number) {
    setObjetos(objetos.map((elemento) => {
      if (elemento.id == id) {
        return {
          ...elemento,
          bool: !elemento.bool 
        }
      } else {
        return elemento;
      }
    }));    
  }

  return (
    <div>
      <ul>
        { objetos.map((element, index) => (
          <>
            <li key={index}>
              { element.bool ? <input type="text" className="bg-gray-400" value={element.nombre} onChange={(e) => handleCambiarNombre(e.target.value, element.id)}/> : element.nombre}
              <button
              onClick={() => handleBoolPersona(element.id)} 
              className=" bg-gray-400 p-2 ml-3 rounded-lg"
              >
                { element.bool ? "Save" : "Update" }
              </button>
            </li>
            <li key={index}>
              { element.apellido }
            </li>
            <li key={index}>
              { element.edad }
            </li>
          </>
        )) }
      </ul>
    </div>
  );
}
