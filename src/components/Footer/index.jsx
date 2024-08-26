import Image from "next/image";
import { IconLinks } from "../Links";
import { CiLinkedin } from "react-icons/ci";
import { Chivo as FontParagrafo} from "next/font/google";
import { Source_Code_Pro as FontTitulo } from "next/font/google";
import  Link  from 'next/link';

const fontParagrafo = FontParagrafo({ 
  subsets: ["latin"],
  weight: ['400']
});

const fontTitulo = FontTitulo({ 
  subsets: ["latin"],
  weight: ['400', '600', '800']
});



export const Footer = () => {
  return (
    <section className="min-h-[300px] w-full bg-slate-950 text-white rounded-t-xl flex flex-col">

      <aside className="container mx-auto flex flex-col md:flex-row items-center p-3">

        <div className="flex flex-col flex-1">
          <Image src={`/assets/logo-nova-deluna.png`} alt={"Imagem animada para deluna system"} width={500} height={500} className='rounded-3xl shadow-2xl w-[100px] h-[100px]' />  
          <IconLinks className='justify-start'/>
        </div>


        <div className="flex flex-1 flex-col gap-5">
          <div>
            <h3 className={`text-2xl ${fontTitulo.className}`}>Endereço:</h3>
            <Link
              href={"https://maps.app.goo.gl/jMnT4BdgYuqTBVdR8"}
              className="hover:text-blue-900 transition ease-in-out"
            >
              <p className={`text-lg underline ${fontParagrafo.className}`}>
                R. Thereza Mouco de Oliveira, 211 - Vila Maracana, São Paulo - SP, 05846-420
              </p>
            </Link>
          </div>

          <div className='flex justify-end'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14618.864114292603!2d-46.7486698!3d-23.6503387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce533031fc5de7%3A0x192e06ba6a205682!2sDeluna%20System!5e0!3m2!1spt-BR!2sbr!4v1724606095851!5m2!1spt-BR!2sbr" 
             allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="border-none rounded-xl w-full h-full"></iframe>
          </div>
        </div>
      </aside>

      <div className="flex items-center w-full min-h-8 justify-center border-t border-slate-900 px-3">

        <Link 
          href={"https://www.linkedin.com/in/eduardo-pontes-b6a2a9254/"}
          className="flex flex-wrap items-center"
        >
          <p className="text-xs inline-block">site criardo pelo: <span className="font-semibold uppercase">Eduardo Pontes</span></p>
          <CiLinkedin size={25} className="inline-block"/>
        </Link>

      </div>

    </section>
  );
};
