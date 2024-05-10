import { NextResponse } from "next/server";
import axios from "axios";

interface User {
    userId: string
}

export async function GET(request: any, { params }: { params: User }) {
    // Obtenemos un usuario especifico que pide el cliente
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.userId}`);

    // Creamos un objeto URL que obtendra la url completa, luego la desestructuramos a partir del signo de pregunta ("?")
    const { searchParams } = new URL(request.url);  // Ejemplo { "nombre": "Pepe" }

    // Ahora obtenemos el valor de la propiedad name del objeto searchParams a traves del metodo get()
    const nombre = searchParams.get("name"); // Esto es igual a "Pepe"
    console.log(request.url);
    console.log(searchParams);
    console.log(nombre);
    // console.log(request);

    // Usamos NextResponse para responder al cliente en un formato json
    return NextResponse.json(res.data);
}