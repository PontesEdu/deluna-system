import { Header } from "@/components/Header";
import { BannerCards}  from "@/components/BannerCards";
import { BannerServicos } from '@/components/BannerServicos';
import { Footer } from "@/components/Footer";
import { BotaoWhatsapp } from '@/components/BotaoWhatsapp/index';
import { BannerInicialServicos } from '@/components/BannerInicioServicos';

export const metadata = {
  title: "Deluna System - Serviços",
  description: "Serviços da Deluna System",
};


export default function Servicos() {
  return (
    <div className="">
      <Header/>
      <main className="">
        <BannerInicialServicos/>
        <BannerServicos/>
        <BannerCards/>
        <BotaoWhatsapp/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}