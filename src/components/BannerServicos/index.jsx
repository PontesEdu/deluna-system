'use client'

import Image from 'next/image';
import { Chivo as FontParagrafo} from "next/font/google";
import Link from 'next/link';
import { motion } from 'framer-motion';

const fontParagrafo = FontParagrafo({ 
  subsets: ["latin"],
  weight: ['400']
});


export const BannerServicos = () =>{
  return(
    <section className="container mx-auto w-full min-h-[400px] flex flex-col lg:gap-6 px-5 pb-12">
      
      <motion.h1 
      initial={{opacity: 0, y: 100}} 
      whileInView={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: 100}} 
      transition={{duration: 0.7}}
      className="deluna-h1">Conheça nossos Serviços Autorizados</motion.h1>

      <aside className="flex flex-col-reverse items-center lg:flex-row">

        <motion.div
        initial={{ opacity: 0 , x: -150}}
        whileInView={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: -150}}
        transition={{duration: 0.7, delay: 0.1}} 
        className='flex flex-1 flex-col gap-5'>
          <h2 className="text-4xl text-start md:text-center mt-5">Serviços</h2>

          <p className={`text-lg ${fontParagrafo.className} indent-4`}>
            A Deluna System com o seu time de técnicos especializados providencia de forma segura a reparação do seu equipamento ou da sua empresa proporcionando durabilidade nas peças de reposição. A maioria das peças substituidas, tem Garantia acima de 1 ano fornecido pela empresa, bem como acima de dois anos pelos fabricantes. Agende uma visita e conheça mais sobre os nossos serviços, como Desenvolvimento de Sistemas, Websites, Redes e Configuração do Outlook. Trabalha-mos com empresas grandes e pequenas com o serviço de retirada e entrega.
          </p>  

          <p className={`text-lg ${fontParagrafo.className} indent-6`}>
          Aqui você encontra todo suporte necessário para o seu smartphone desde a remoção de vírus até a substituição
          do módulo frontal. Para empresas, nós temos preços atra- tivos na manutenção e reposição de peças para aparelhos smartphones, tablets e ipads.
          Trabalhamos com todas as marcas de smartphones, tablets e também com toda a linha Apple.
          Para saber mais, acesse o nosso site no rodapé da pagina.
          </p>
          
        </motion.div>


        <motion.div
        initial={{ opacity: 0 , y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.5 }} 
        className='flex flex-1 justify-center'>
          <Link href={"https://www.dell.com"} target='_blank' rel="noopener noreferrer"  referrerpolicy="no-referrer">
            <Image width={450} height={450} src={'/assets/dell-deluna.png'} alt='Logo de representação da empresa Dell' className=' h-[180px] md:h-[300px] w-[500px]'/>
          </Link>

          <h1 className='sr-only'>Logo da Dell que somos representates representação da empresa</h1>
        </motion.div>
      </aside>
    </section>
  )
}