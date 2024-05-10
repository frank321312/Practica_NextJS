import { NextResponse } from "next/server";
import axios from "axios";

console.log(process.env.SECRET_TOKEN);

export async function GET() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return NextResponse.json(res.data);
}

export async function POST(request: any) {
    const req = await request.json();
    console.log(req);

    return NextResponse.json({ message: "Creando datos..." });
}

export function PUT() {
    return NextResponse.json({ message: "Actualizando datos..." });
}

export function DELETE() {
    return NextResponse.json({ message: "Eliminando datos..." });
}
