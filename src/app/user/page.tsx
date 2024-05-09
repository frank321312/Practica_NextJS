import axios from "axios";
import CardUser from "../../../components/CardUser";
import Link from "next/link";

export async function loadedUsers() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    await new Promise(resolve => setTimeout(resolve, 4000));

  return res.data;
}

export default async function UsersHome() {
  const respuesta = await loadedUsers();
  return (
    <div>
      {
        respuesta.map((item: any) => (
            <div key={ item.id }>
                <Link href={`http://localhost:3000/user/${item.id}`}>{ item.id }. { item.name }</Link>
                <p>{ item.username }</p>
                <p>{ item.email }</p>
                <p>{ item.phone }</p>
            </div>
        ))
      }
    </div>
  );
}
