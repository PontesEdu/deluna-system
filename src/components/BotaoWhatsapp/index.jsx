'use client'
import { BotaoLink } from "../Links/BotaoLink"
import { FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';


export const BotaoWhatsapp = () =>{
  return(
    
    <BotaoLink href={"https://wa.me/5511993084254"} className={"fixed right-7 bottom-5 bg-green-600 transition animate-pulse hover:animate-bounce duration-700"}>
      <FaWhatsapp size={30} className="inline-block" />
    </BotaoLink>
  )
}