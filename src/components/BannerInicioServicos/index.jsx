'use client'
import { Source_Code_Pro as FontTitulo } from "next/font/google";
import { Rubik as FontParagrafo} from "next/font/google";
import { IconLinks } from '../Links';
import { useState } from 'react';
import { BotaoLink } from './../Links/BotaoLink';
import { motion } from 'framer-motion';


const fontTitulo = FontTitulo({ 
  subsets: ["latin"],
  weight: ['400', '600', '800']
});

const fontParagrafo = FontParagrafo({ 
  subsets: ["latin"],
  weight: ['400']
});

export const BannerInicialServicos = ()  => {

  const [mensagem, setMensagem] = useState('');


  const url = `https://wa.me/5511993084254?text=${encodeURIComponent(mensagem)}`;

  return (
    <section className="w-full min-h-[400px] bg-imagem-tech bg-cover">  

      <aside className='container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-5 py-9 w-full h-full '>

        <motion.div 
        initial={{ opacity: 0 , x: -150}}
        whileInView={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: -150}}
        transition={{duration: 0.7, delay: 0.1}} 
        className='w-full h-full flex flex-1 flex-col gap-2 items-center justify-end'>
          <h2 className={`text-3xl xl:text-4xl font-semibold text-blue-800 ${fontTitulo.className}`}>
            Fale Conosco:<span className='text-black'> Qual é o seu problema que vamos ajudar</span>
          </h2>
          <p className={`text-sm sm:text-base ${fontParagrafo.className}`}>
          Fazemos Montagem e Manutenções em computadores novos e antigos, trabalhamos com Hardwares e Softwares, Redes, aplicativos, sites, sistemas.
          </p>
          <IconLinks className='justify-end' text/>
        
        </motion.div>
        
        <motion.div 
        initial={{ opacity: 0 , y: 50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.5 }}
        transition={{ duration: 0.3 }}
        className='flex flex-col justify-start items-center flex-1'>
          <form action="" className={`${fontParagrafo.className}`}>
            <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)} 
            required 
            name="itext" 
            id="itext" 
            className=' min-w-full min-h-[250px] max-h-[300px] max-w-full sm:min-w-[400px] sm:min-h-[300px] sm:max-h-[450px] sm:max-w-[400px] rounded-xl border-none outline-none p-5 shadow-2xl' placeholder='Digite qual é o seu problema que vamos ajudar'></textarea>
            
            <div className="flex justify-end w-full">
              <BotaoLink href={url} className="bg-green-600 text-white hover:bg-green-400">
                Enviar o Seu Problema
              </BotaoLink>
            </div>
          </form>
        </motion.div>

      </aside>

    </section>
  )
}