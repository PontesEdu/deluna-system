'use client'

import Link from "next/link"
import { BotaoWhats } from './../BotaoWhatsapp/BotaoWhats';


export const MenuNav = ({Paginas}) =>{


  return (
    <nav className="hidden sm:flex items-center gap-8">
      <ul className="flex gap-8 flex-1">
        {Paginas.map((pagina, index) => (
          <li key={index}>
            <Link rel="noopener noreferrer"  referrerpolicy="no-referrer" href={pagina.endereco} className="deluna-estilo-menu">{pagina.pagina}</Link>
          </li>
        ))}
      </ul>

      <BotaoWhats className={"hidden sm:flex"}/>

    </nav>
  )
}