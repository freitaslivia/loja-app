import Link from "next/link";

import React from 'react'

export default function Cabecalho() {
  return (

    <header>
        <nav>
        <Link href="/">HOME</Link> | 
        <Link href="/produtos/mamao">MAMÃO</Link> | 
        <Link href="/produtos/melao">MELÃO</Link> | 
        <Link href="/produtos/manga">MANGA</Link>
        </nav>
    </header>
   
  )
}


