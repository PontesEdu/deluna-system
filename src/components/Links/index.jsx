'use client'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { BotaoLink } from './BotaoLink';
import { motion } from 'framer-motion';

const links = [
  {
    "icon": <FaInstagram size={30} className="mx-2" />,
    "https": "https://www.instagram.com/delunasystem",
    "cor": "bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af]"
  },
  {
    "icon": <FaFacebook size={30} className="mx-2" />,
    "https": "https://www.facebook.com/Deluna-System",
    "cor": "bg-blue-800"
  },
  {
    "icon": <LuMail size={30} className="mx-2" />,
    "https": "mailto:delunasystem@gmail.com?subject=Olá&body=Olá,%20tudo%20bem?%20Gostaria%20de%20um%20Orçamento",
    "cor": "bg-gray-700"
  },
  {
    "icon": <FaWhatsapp size={30} className="mx-2" />,
    "https": "https://wa.me/5511993084254",
    "cor": "bg-green-500",
    "texto": "Faça o seu Orçamento"
  }
]


export const IconLinks = ({className, text}) => {
  return (
    <div className={`flex items-center my-5 gap-3 flex-wrap-reverse ${className}`}>
      
      {links.map((link, index) => (
        <motion.span
        initial={{ opacity: 0 , scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        exit={{opacity: 0, scale: 0}}
        transition={{duration: 0.3, delay: index * 0.2}}
        >
          <BotaoLink
          href={link.https}
          className={link.cor}
          >
            {link.icon}
            {text && link.texto}
          </BotaoLink>
        </motion.span>
      ))}

    </div>
  );
};
