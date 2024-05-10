import { NextResponse } from "next/server";
import axios from "axios";

console.log(process.env.SECRET_TOKEN);

export async function GET() {
    // En la ruta http://localhost:3000/api/users devolvera todos los usuarios deuuelto por jsonplaceholder
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return NextResponse.json(res.data);
}

export async function POST(request: any) {
    // req obtiene los datos enviados al servidor, si no se envia nada lanzara un error, se recomienda usar postman
    // req es una promesa por lo que podemos usar async/await para obtener su valor. Otra forma es usando then
    const req = await request.json();
    console.log(req);

    // NextResponse es una clase que proporciona next, permite personalizar la respuesta que se envia del servidor al cliente.
    return NextResponse.json({ message: "Creando datos..." });
}

export function PUT() {
    return NextResponse.json({ message: "Actualizando datos..." });
}

export function DELETE() {
    return NextResponse.json({ message: "Eliminando datos..." });
}
