'use client'
import Image from 'next/image';
import { Source_Code_Pro as FontTitulo } from "next/font/google";
import { Rubik as FontParagrafo} from "next/font/google";
import { IconLinks } from '../Links';
import { motion } from 'framer-motion';



const fontTitulo = FontTitulo({ 
  subsets: ["latin"],
  weight: ['400', '600', '800']
});

const fontParagrafo = FontParagrafo({ 
  subsets: ["latin"],
  weight: ['400']
});

export const BannerInicial = ()  => {
  return (
    <section className="container mx-auto w-full min-h-[350px] flex items-center justify-center gap-8 px-5 md:px-5 py-9">  

      <motion.div
      initial={{ opacity: 0 , x: -100}}
      whileInView={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: -100}}
      transition={{duration: 0.7}}
      className='w-full h-full flex flex-1 flex-col gap-2 items-center justify-end'>

        <h2 className={`text-3xl xl:text-4xl font-semibold ${fontTitulo.className}`}>
          Seu Parceiro em Tecnologia: <span className='text-red-700'>Consertos, criação e Desenvolvimento web</span>
        </h2>

        <p className={`text-sm sm:text-base ${fontParagrafo.className}`}>
          A <span className={`font-bold ${fontTitulo.className}`}>Deluna System</span> oferece serviços completos de tecnologia, incluindo Formatação de computadores, remoção de vírus, Troca de telas e Baterias. Além disso, somos representantes autorizados da <span className='text-blue-700'>Dell</span>. Também criamos sites e aplicativos personalizados para atender às suas necessidades digitais. 
        </p>

        <IconLinks className='justify-end' text/>
         
      </motion.div>

      
      <motion.div 
      initial={{ opacity: 0 , y: 100, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 100, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      className='origin-center hidden md:flex md:justify-end lg:justify-center items-center flex-1'>
        <Image src={`/assets/logo-nova-deluna.png`} alt={"Imagem animada para deluna system"} width={500} height={500} className='rounded-3xl shadow-2xl md:mb-14 lg:mb-0 w-[400px] h-[300px]' />
      </motion.div>

    </section>
  )
}