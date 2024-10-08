'use client'

import Link from "next/link"
import { XCircleIcon } from '@heroicons/react/24/outline'
import Image from "next/image"
import { BotaoWhats } from './../BotaoWhatsapp/BotaoWhats';
import { motion } from 'framer-motion';


export const MenuResponsivo = ({Paginas, isOpen, setIsOpen}) =>{
  return (

    <nav className="z-10 sm:hidden h-screen w-8/12 bg-branco-100 shadow-2xl fixed top-0 right-0 flex flex-col gap-14 p-6 pr-3">


      <div className="flex justify-between items-center">
        {isOpen && <XCircleIcon onClick={() => setIsOpen(!isOpen)} className="deluna-botao-menu"/>}

        <Image src={`/assets/logo-nova-deluna.png`} alt="Logo da deluna System" width={50} height={50} className="rounded-lg"/>
      </div>

      <ul className="flex items-start flex-col gap-7">
      {Paginas.map((pagina, index) => (
        <motion.li 
        initial={{ opacity: 0 , scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        exit={{opacity: 0, scale: 0}}
        transition={{duration: 0.3, delay: index * 0.2}}
        key={index} className="text-xl">
          <Link href={pagina.endereco} className="deluna-estilo-menu" rel="noopener noreferrer"  referrerpolicy="no-referrer">{pagina.pagina}</Link>
        </motion.li>
      ))}

        <BotaoWhats className={"flex sm:hidden"}/>
      </ul>
    </nav>
    
  )
}