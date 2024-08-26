'use client'

import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from "react"
import { MenuResponsivo } from "./MenuResponsivo"
import { MenuNav } from "./MenuNav";

const Paginas = [
  {
    "pagina": "Home",
    "endereco": "/"
  },
  {
    "pagina": "Sobre",
    "endereco": "/sobre"
  }, 
  {
    "pagina": "Serviços",
    "endereco": "/servicos"
  }
]

export const Menu = () =>{

  const [isOpen, setIsOpen] = useState(false)

  

  return (
    <aside>
      {isOpen ? <MenuResponsivo Paginas={Paginas} isOpen={isOpen} setIsOpen={setIsOpen}/> : <Bars3Icon onClick={() => setIsOpen(!isOpen)} className="deluna-botao-menu"/>}

      <MenuNav Paginas={Paginas}/>

    </aside>
  )
}