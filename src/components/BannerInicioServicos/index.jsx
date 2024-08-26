'use client'
import { Source_Code_Pro as FontTitulo } from "next/font/google";
import { Rubik as FontParagrafo} from "next/font/google";
import { IconLinks } from '../Links';
import { useState } from 'react';
import { Link } from 'next/link';
import { BotaoLink } from './../Links/BotaoLink';


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

        <div className='w-full h-full flex flex-1 flex-col gap-2 items-center justify-end'>
          <h2 className={`text-3xl xl:text-4xl font-semibold ${fontTitulo.className}`}>
            Fale conosco:<span className='text-slate-900'> Qual é o seu problema que vamos ajudar</span>
          </h2>
          <p className={`text-sm sm:text-base ${fontParagrafo.className}`}>
          Fazemos Montagem e Manutenções em computadores novos e antigos, trabalhamos com Hardwares e Softwares, Redes, aplicativos, sites, sistemas.
          </p>
          <IconLinks className='justify-end' text/>
        
        </div>
        
        <div className='flex flex-col justify-start items-center flex-1'>
          <form action="" className={`${fontParagrafo.className}`}>
            <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)} 
            required 
            name="itext" 
            id="itext" 
            className=' min-w-full min-h-[250px] max-h-[300px] max-w-full sm:min-w-[400px] sm:min-h-[300px] sm:max-h-[450px] sm:max-w-[400px] rounded-xl border-none outline-none p-5 shadow-2xl' placeholder='Digite qual é o seu problema que vamos ajudar'></textarea>
            
            <div className="flex justify-end w-full">
              <BotaoLink href={url} className="bg-green-600 text-white">
                Enviar o Seu Problema
              </BotaoLink>
            </div>
          </form>
        </div>

      </aside>

    </section>
  )
}