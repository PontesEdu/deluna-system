'use client'

import Link from 'next/link';
import { useState } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

const cards = [
  {
    "id": "1",
    "titulo": "Assitencia Tecnica",
    "descricao": "Conserto de aparelhos móveis, como smartphones e tablets, a troca de Telas e Baterias, reparos em televisores, sistemas operacionais,Instalação do Windows e Drivers.",
    "imagem": "bg-imagem-assitencia",
    "endereco": "/servicos"
  },
  {
    "id": "2",
    "titulo": "Criação de Sites, app, Sistemas",
    "descricao": "Criamos Sites e Aplicativos e com o Design exclusivo da empresa, também criamos Sistemas para empresa grandes e pequenas. ",
    "imagem": "bg-imagem-desenvolvedor",
    "endereco": "/servicos"
  },
  {
    "id": "3",
    "titulo": "Monatgem, Manutenção e Reparação",
    "descricao": "Fazemos Montagem e Manutenções em computadores novos e antigos, trabalhamos com Hardwares e Softwares, Redes, aplicativos, sites, sistemas.",
    "imagem": "bg-imagem-manutencao",
    "endereco": "/servicos"
  }
]



export const BannerCards = () =>{

  const [active, setActive] = useState(false);



  const handleCardClick = (cardId) => {
    
    setActive(active === cardId ? null : cardId);
  };

  return(
    <section className="container mx-auto w-full min-h-[300px] flex flex-col px-4 py-6">

      <motion.h1
      initial={{opacity: 0, x: -100}} 
      whileInView={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: -100}} 
      transition={{duration: 0.7}}
      className={`deluna-h1 my-8`}>
        O que fazemos?
      </motion.h1>
      
      <aside className='w-full h-full my-8 flex flex-col items-center lg:flex-row lg:justify-center gap-10'>


        {cards.map((card, index) =>(
          <motion.div
          initial={{opacity: 0, x: -100}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.7, delay: index * 0.1}}
          key={index}
          onMouseEnter={() => handleCardClick(card.id)}
          className={ `deluna-card ${card.imagem}
          ${active === card.id ? 'deluna-tamanho-grande-card' : 'deluna-tamanho-normal-card'}`}>
  
            <p className='text-lg border-b border-black p-1'>
              O que fazemos?
            </p>
            
            <h1 className='deluna-card-h1'>{card.titulo}</h1>
            
            {active == card.id && 
              <motion.p
              initial={{opacity: 0, x: -50}}
              animate={{opacity: 1, x: 0}}  
              transition={{duration: 0.6}}
              className='deluna-card-paragrafo'>
                {card.descricao}
              </motion.p>
            }
  
            <Link href={`${card.endereco}`} className='absolute bottom-5 right-5 flex items-center gap-4 text-xs text-blue-800'>
              clique aqui<FaExternalLinkAlt size={40}/>
            </Link>
          </motion.div>
        ))}

      </aside>
    </section>
  )
}