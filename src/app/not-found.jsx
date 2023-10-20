import Image from "next/image";

export default function NotFound() {
  return (
    <div>
        <h1>404</h1>
            <div>
                <figure>
                    <Image src="https://http.cat/images/404.jpg"> 
                </figure>
            </div>
        <h2>Página nao encontrada</h2>

    </div>
  )
}
