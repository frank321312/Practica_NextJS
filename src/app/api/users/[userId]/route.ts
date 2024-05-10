import { NextResponse } from "next/server";
import axios from "axios";

interface User {
    userId: string
}

export async function GET(request: any, { params }: { params: User }) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
    const { searchParams } = new URL(request.url); 
    const nombre = searchParams.get("name");
    
    console.log(searchParams);
    console.log(nombre);
    // console.log(request);

    return NextResponse.json(res.data);
}