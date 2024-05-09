import axios from "axios";
import UsersHome, { loadedUsers } from "../page";
import { Suspense } from "react";

async function loadedUserId(id: number): Promise<any[]> {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`);

    return res.data;
}

export default async function UserId({ params }: { params: any }) {
    const informationUser = await loadedUserId(params.paramId);

    return (
    <div>
        <h2>Informacion del usuario</h2>
        {  
            informationUser.map((item: any) => (
                <div key={item.id}>
                    <p>Id: { item.id }</p>
                    <p>Nombre: {item.name}</p>
                    <p>Correo electronica: { item.email }</p>
                    <p>Telefono: { item.phone }</p>
                </div>
            ))
        }
        <hr />
        <h2>Otros usuarios</h2>
        <Suspense fallback={<h2>Cargando otros usuarios...</h2>}>
            <UsersHome />
        </Suspense>
    </div>
 ); 
}

