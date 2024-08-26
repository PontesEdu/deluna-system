import { FaWhatsapp } from "react-icons/fa";
import { BotaoLink } from './../Links/BotaoLink';

export const BotaoWhats = ({className}) =>{
  return(
    <BotaoLink 
      href={'https://wa.me/5511993084254'} 
      className={`${className} bg-green-500 hover:scale-95`}>
        <FaWhatsapp size={20} className='inline-block'/> 11 99308-4254
    </BotaoLink>
  )
}