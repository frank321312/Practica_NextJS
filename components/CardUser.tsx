import Link from "next/link";

export default function CardUser({ respuesta, url }: any) {
 return (
    <div>
      {
        respuesta.map((item: any) => (
            <div key={ item.id }>
                <Link href={url}>{ item.id }. { item.name }</Link>
                <p>{ item.username }</p>
                <p>{ item.email }</p>
                <p>{ item.phone }</p>
            </div>
        ))
      }
    </div>
 ); 
}