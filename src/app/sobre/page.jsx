import { Header } from "@/components/Header";
import { BannerCards}  from "@/components/BannerCards";
import { BannerSobre } from "@/components/BannerSobre";
import { BannerServicos } from '@/components/BannerServicos';
import { Footer } from "@/components/Footer";
import { BotaoWhatsapp } from '@/components/BotaoWhatsapp/index';

export const metadata = {
  title: "Deluna System - Sobre",
  description: "Sobre a Deluna System",
};


export default function Sobre() {


  return (
    <div>
      <Header/>
      <main >
        <BannerSobre/>
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
