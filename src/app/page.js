import { BannerInicial } from "@/components/BannerInicial";
import { Header } from "@/components/Header";
import { BannerCards}  from "@/components/BannerCards";
import { BannerSobre } from "@/components/BannerSobre";
import { BannerServicos } from '@/components/BannerServicos';
import { Footer } from "@/components/Footer";
import { BotaoWhatsapp } from '@/components/BotaoWhatsapp/index';


export default function Home() {


  return (
    <div>
      <Header/>
      <main>
        <BannerInicial/>
        <BannerCards/>
        <BannerSobre/>
        <BannerServicos/>
        <BotaoWhatsapp/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
