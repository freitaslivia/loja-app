import Link from "next/link";

import React from 'react'

export default function Cabecalho() {
  return (

    <header className="bg-gray-700 text-white h-20">
    <nav className="flex flex-row justify-around">
      <Link href="/" className="block py-6 hover:bg-black font-extrabold">HOME</Link>
      <Link href="/produtos/mamao" className="block py-6 hover:bg-black font-extrabold">MAMÃO</Link>
      <Link href="/produtos/melao" className="block py-6 hover:bg-black font-extrabold">MELÃO</Link> 
      <Link href="/produtos/manga" className="block py-6 hover:bg-black font-extrabold">MANGA</Link>
    </nav>
    </header>
   
  )
}


