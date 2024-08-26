'use client'
import Image from 'next/image';
import { Chivo as FontParagrafo} from "next/font/google";
import { motion } from 'framer-motion';

const fontParagrafo = FontParagrafo({ 
  subsets: ["latin"],
  weight: ['400']
});

export const BannerSobre = () => {
  return (
    <section className="w-full min-h-[400px] flex flex-col lg:gap-6 px-6 pb-6">

      <motion.h1
      initial={{opacity: 0, x: -100}} 
      whileInView={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: -100}} 
      transition={{duration: 0.7}} 
      className="deluna-h1">Quem Somos?</motion.h1>


      <aside className="flex flex-col items-center lg:flex-row gap-4 lg:gap-5">

        <motion.div 
        initial={{ opacity: 0 , y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        className='flex flex-1 justify-center'>
          <Image width={450} height={450} src={'/assets/cleiton-deluna.jpeg'} alt='Logo de representação da empresa Dell' className='w-[350px] h-[200px] lg:h-[300px] lg:w-[550px] rounded-3xl shadow-xl'/>
        
          <h1 className='sr-only'>Logo da Dell que somos representates representação da empresa</h1>
        </motion.div>

      
        <motion.div
        initial={{ opacity: 0 , x: -150}}
        whileInView={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: -150}}
        transition={{duration: 0.7, delay: 0.1}}  
        className='flex flex-1 flex-col gap-5'>
          <h2 className="text-3xl text-left mt-5">Sobre nos</h2>

          <p className={`text-lg ${fontParagrafo.className} indent-4`}>
            Atuando desde 2010 na área de TI, a <span className='font-semibold'>Deluna System</span> tem como objetivo
            levar soluções para as empresas, bem como também para clientes domésti- cos facilitando a praticidade do atendimento fisico no local. A empresa tem a pronto atendimento uma equipe de profissionais capacitados que realizam atendimentos através de acesso remoto, garantindo a praticidade na solução do problema. A Deluna System oferece serviços especializados fazendo dela uma empresa de TI capacitada para atender todos os tipos de problemas re- corrente a técnologia.
          </p>  

          <p className={`text-lg ${fontParagrafo.className} indent-6`}>
            Além de atuar na área de reparos e manutenção, a <span className='font-semibold'>Deluna System</span> também é representante da <span className='text-blue-700'>Dell</span> no Brasil, onde desempenha a função de Sollution Provider <span className='text-blue-700'>Dell</span> levando aos seus clientes, equipamentos e serviços de ponta Acesse o nosso site e confira as novidades.
          </p>
          
        </motion.div>

      </aside>
    </section>
  )
}